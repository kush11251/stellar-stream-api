const express = require('express');
const app = express();
const metricsController = require('./controllers/metrics');
const PORT = 3000;

app.use(express.json());
app.use('/metrics', metricsController);

app.get('/', (req, res) => {
  res.send('Stellar Stream API');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});