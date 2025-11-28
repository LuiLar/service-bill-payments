export const getHealth = (_, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
};
