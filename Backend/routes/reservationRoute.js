import express from 'express';
const router = express.Router();

router.post('/send', (req, res) => {
  // Your logic to handle the request
  res.status(200).json({ success: true, message: "Reservation sent!" });
});

export default router;
