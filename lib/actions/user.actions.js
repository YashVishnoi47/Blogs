import User from "../models/user.model";
import { connectDB } from "../mongodb/mongoose";

// Function to create or update a user in the database
export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    // Connect to the database
    await connectDB();

    // Find or create a user with the provided clerkId
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          // Handle email_addresses carefully with a fallback
          email: email_addresses && email_addresses.length > 0
            ? email_addresses[0].email_address
            : null,
          username,
        },
      },
      { new: true, upsert: true } // Update if exists, otherwise create a new user
    );

    if (!user) {
      throw new Error(`User creation or update failed for clerkId: ${id}`);
    }

    return user;
  } catch (error) {
    console.error(`Error creating or updating user with ID ${id}:`, error.message);
    // Rethrow error to ensure proper error handling upstream
    throw new Error(`Error creating or updating user: ${error.message}`);
  }
};

// Function to delete a user from the database
export const deleteUser = async (id) => {
  try {
    // Connect to the database
    await connectDB();

    // Attempt to find and delete the user by clerkId
    const result = await User.findOneAndDelete({ clerkId: id });

    // If no user was found, return null and log a warning
    if (!result) {
      console.warn(`User with ID ${id} not found for deletion.`);
      return null;
    }

    return result;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error.message);
    // Throw a descriptive error to help debugging
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
