import Profile from "../models/Profile.js";
// Create or update a profile
export const upsertProfile = async (req, res) => {
  try {
    const { user, fullName, address, profilePicture, dateOfBirth } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user },
      { fullName, address, profilePicture, dateOfBirth },
      { new: true, upsert: true }
    );
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile.", error });
  }
};
