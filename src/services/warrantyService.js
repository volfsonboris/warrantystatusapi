const warrantyDatabase = require('../data/warrantyDatabase');

const checkWarrantyStatus = (serialNumber) => {
  const warranty = warrantyDatabase.findWarrantyBySerialNumber(serialNumber);
  
  if (!warranty) {
    throw new Error('Product not found');
  }

  return {
    serialNumber,
    status: warranty.status,
    startDate: warranty.startDate,
    endDate: warranty.endDate,
    isValid: warranty.isValid
  };
};

module.exports = {
  checkWarrantyStatus
};