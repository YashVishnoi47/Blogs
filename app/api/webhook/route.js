import { Webhook } from "svix";
import { headers } from "next/headers";
import { createOrUpdateUser, deleteUser } from "@/lib/actions/user.actions";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;

// Handle 'user.created' and 'user.updated' events
if (eventType === "user.created" || eventType === "user.updated") {
  const { id, first_name, last_name, image_url, email_addresses, username } = evt?.data;

  try {
    // Attempt to create or update the user
    const user = await createOrUpdateUser(
      id,
      first_name,
      last_name,
      image_url,
      email_addresses,
      username
    );

    // If the user is created and the event type is 'user.created', update metadata
    if (user && eventType === "user.created") {
      try {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userMongoId: user._id,
            isAdmin: user.isAdmin, // Assuming 'isAdmin' is part of the user model
          },
        });
      } catch (error) {
        console.error("Error updating user MetaData:", error);
        return new Response("Error occurred while updating user metadata", { status: 400 });
      }
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    return new Response("Error occurred while creating or updating user", { status: 400 });
  }
}

// Handle 'user.deleted' event
if (eventType === "user.deleted") {
  const { id } = evt?.data;

  try {
    // Attempt to delete the user
    const result = await deleteUser(id);

    // If no result, log a warning that the user might not have been deleted
    if (!result) {
      console.warn(`User with ID ${id} not found for deletion.`);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response("Error occurred while deleting user", { status: 400 });
  }
}

  return new Response("Webhook received", { status: 200 });
}
