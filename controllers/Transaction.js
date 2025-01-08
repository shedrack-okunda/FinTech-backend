import Transaction from "../models/Transaction.js";
// Create a transaction
export const createTransaction = async (req, res) => {
  try {
    const { user, walletId, type, amount, paymentMethod, description, status } =
      req.body;
    const transaction = new Transaction({
      user,
      walletId,
      type,
      amount,
      paymentMethod,
      description,
      status,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error creating transaction.", error });
  }
};

// Get transactions by user ID
export const getTransactionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const transactions = await Transaction.find({ user: userId });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving transactions.", error });
  }
};
