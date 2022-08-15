const orderSubTypes = {
  Retail: "Retail",
  Phone: "Phone",
  Web: "Web",
  Mobile: "Mobile",
  Exchange: "Exchange",
  DropShip: "DropShip",
};

module.exports = {
  getOrderSubtypes: (req, res, next) => {
    return res.status(200).json({ orderSubTypes: orderSubTypes });
  },
};
