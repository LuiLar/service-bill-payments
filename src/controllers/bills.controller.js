import Bill from "../models/bill.model.js";

export const createBill = async (req, res) => {
  try {
    const bill = new Bill(req.body);

    await bill.save();

    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const payBill = async (req, res) => {
  const { clientId, serviceType, billingPeriod } = req.body;

  try {
    const bill = await Bill.findOne({
      clientId: clientId,
      serviceType: serviceType,
      billingPeriod: billingPeriod,
    });

    if (!bill) {
      res.status(404).json({ error: "Bill not found" });
    }

    if (bill.status === "Paid") {
      res.status(400).json({ error: "Bill is already paid" });
    }

    bill.status = "Paid";
    await bill.save();

    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPendingBillsByClientID = async (req, res) => {
  const { id } = req.params;

  try {
    const bills = await Bill.find({ clientId: id, status: "Pending" });

    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPaidBillsByClientID = async (req, res) => {
  const { id } = req.params;

  try {
    const bills = await Bill.find({ clientId: id, status: "Paid" });

    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
