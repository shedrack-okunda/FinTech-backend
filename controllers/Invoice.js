import Invoice from "../models/Invoice.js";

// Create an invoice
export const createInvoice = async (req, res) => {
  try {
    const {
      user,
      transactionId,
      invoiceNumber,
      amount,
      issueDate,
      dueDate,
      status,
    } = req.body;
    const invoice = new Invoice({
      user,
      transactionId,
      invoiceNumber,
      amount,
      issueDate,
      dueDate,
      status,
    });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: "Error creating invoice.", error });
  }
};

// Get invoices by user ID
export const getInvoicesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const invoices = await Invoice.find({ user: userId });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving invoices.", error });
  }
};
