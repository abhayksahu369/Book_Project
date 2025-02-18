// const express = require('express');
// const { checkAuth } = require('../middleware/authMiddleware'); // Import the new auth middleware// Import the controller functions
// const router = express.Router();

// // POST route to submit a review
// router.post('/reviews', checkAuth, async (req, res) => {
//     const { bookId, rating, comment } = req.body;
  
//     try {
//       const newReview = new Review({
//         book: bookId,
//         user: req.user.id, // Assuming user ID is available from the auth middleware
//         rating,
//         comment,
//       });
  
//       await newReview.save();
//       res.status(201).json(newReview);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//     }
//  }); // Only logged-in users can post reviews

// // GET route to retrieve reviews for a specific book
// router.get('/reviews/:bookId', async (req, res) => {
//     const { bookId } = req.params;
  
//     try {
//       const reviews = await Review.find({ book: bookId }).populate('user', 'username'); // Populate user info
//       res.status(200).json(reviews);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//     }
// }); // Get reviews for a specific book


// module.exports = router;
