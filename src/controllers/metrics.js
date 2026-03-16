const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Metrics endpoint' });
});

router.post('/', (req, res) => {
  const { data } = req.body;
  console.log('Received data:', data);
  res.json({ message: 'Data received' });
});

module.exports = router;