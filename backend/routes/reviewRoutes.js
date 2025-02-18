const express = require("express");
const Review = require("../models/Review");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a review (only logged-in users)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { book, rating, comment } = req.body;
    const user = req.user.id; // Get user ID from authMiddleware

    // Check if required fields are provided
    if (!book || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new review
    const review = new Review({ book, user, rating, comment });
    await review.save();

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get reviews (filtered by userId, bookId, comment, or rating)
router.get("/:id", async (req, res) => {
  try {
    const { userId, bookId, comment, rating } = req.query;
    let filter = {};

    if (userId) filter.user = userId;
    if (bookId) filter.book = bookId;
    if (comment) filter.comment = new RegExp(comment, "i"); // Case-insensitive search
    if (rating) filter.rating = rating;

    const reviews = await Review.find(filter).populate("user", "name").populate("book", "title");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
