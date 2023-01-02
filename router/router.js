const express = require('express');
const router = express.Router();

// http://localhost:3000/example/get
router.get('/get', (req, res) => {
  res.status(200).json({
    message: 'Using GET',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get('/get/:id', (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: 'Using GET by ID',
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
