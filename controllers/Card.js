import Card from "../models/Card.js";

// Create a new card
export const createCard = async (req, res) => {
  try {
    const { user, cardNumber, cardHolderName, expiryDate, cvv } = req.body;
    const card = new Card({
      user,
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: "Error creating card.", error });
  }
};

// Get cards by user ID
export const getCardsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const cards = await Card.find({ user: userId });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cards.", error });
  }
};
