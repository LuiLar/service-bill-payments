import Client from "../models/client.model.js";

export const getClients = async (_, res) => {
  try {
    const allClients = await Client.find();
    console.log(allClients);
    res.status(200).json(allClients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
