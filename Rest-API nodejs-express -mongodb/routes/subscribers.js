const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// --------Rotas para subscritores------------

// Rota para receber todos subscritores
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para um receber um subscritor
router.get("/:id", (req, res) => {});

// Rota para criar um subscritor
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para dar update a um subscritor
router.patch("/:id", (req, res) => {});
// Rota para eliminar um subscritor
router.delete("/:id", (req, res) => {});

module.exports = router;
