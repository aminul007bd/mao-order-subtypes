const express = require("express");

const app = express();
const subtypes = {
  data: [
    {
      item: "OrderSubType",
      value: "Retail",
    },
    {
      item: "OrderSubType",
      value: "Phone",
    },
    {
      item: "OrderSubType",
      value: "Mobile",
    },
    {
      item: "OrderSubType",
      value: "Web",
    },
    {
      item: "OrderSubType",
      value: "Exchange",
    },
    {
      item: "OrderSubType",
      value: "DropShip",
    },
  ],
};
app.get("/order/subtypes", (req, res, next) => {
  res.json(subtypes);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;
