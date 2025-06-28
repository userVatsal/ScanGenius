const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/scan', (req, res) => {
  const { data } = req.body;

  // Simple fraud detection example
  const hash = crypto.createHash('sha256').update(data).digest('hex');

  console.log(`[SCAN] Data: ${data}, Hash: ${hash}`);
  res.status(200).json({ success: true, hash });
});

app.listen(PORT, () => {
  console.log(`ScanGenius backend running on http://localhost:${PORT}`);
});
