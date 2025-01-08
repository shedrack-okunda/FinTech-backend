import Notification from "../models/Notification.js";

// Create a notification
export const createNotification = async (req, res) => {
  try {
    const { user, title, message, isRead } = req.body;
    const notification = new Notification({ user, title, message, isRead });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: "Error creating notification.", error });
  }
};

// Get notifications by user ID
export const getNotificationsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.find({ user: userId });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving notifications.", error });
  }
};
