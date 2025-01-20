import User from "../models/user.model";
import { connectDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connectDB();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email_addresses && email_addresses.length > 0 ? email_addresses[0].email_address : null,
          username,
        },
      },
      { new: true, upsert: true }
    );
    return user;
  } catch (error) {
    console.error(`Error creating or updating user with ID ${id}:`, error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectDB();
    const result = await User.findOneAndDelete({ clerkId: id });
    return result;
  }catch(error){
    console.error(`Error deleting user with ID ${id}:`, error.message);
    throw new Error(`Error in deleteUser: ${error.message}`);
  }
};
