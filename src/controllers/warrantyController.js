const warrantyService = require('../services/warrantyService');

const getWarrantyStatus = (req, res) => {
  try {
    const { serialNumber } = req.params;
    const warrantyStatus = warrantyService.checkWarrantyStatus(serialNumber);
    res.json(warrantyStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWarrantyStatus
};