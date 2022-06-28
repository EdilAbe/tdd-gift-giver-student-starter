//import GiftExchange from "../models/gift-exchange";
const GiftExchange = require("../models/gift-exchange");
const express = require("express");
const { traditional } = require("../models/gift-exchange");
const router = express.Router();

// app.use(() => console.log("new request"));

router.post("/pairs", (req, res, next) => {
  const names = GiftExchange.pairs(req.body.names);
  //res.status(200).json(names);
  try {
    // res.send({ pairs: true });
    res.status(200).json(pairs);
  } catch (error) {
    next(error);
  }
});

router.post("/traditional", (req, res, next) => {
  const names = GiftExchange.traditional(req.body.names);
  // res.status(200).json(names);
  try {
    // res.send({ traditional: true });
    res.status(200).json(traditional);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
