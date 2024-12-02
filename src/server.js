const express = require('express');
const warrantyRoutes = require('./routes/warrantyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', warrantyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});