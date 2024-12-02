// Simulated database for demonstration
const warranties = new Map([
  ['SN123456', {
    status: 'active',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    isValid: true
  }],
  ['SN789012', {
    status: 'expired',
    startDate: '2022-01-01',
    endDate: '2023-01-01',
    isValid: false
  }]
]);

const findWarrantyBySerialNumber = (serialNumber) => {
  return warranties.get(serialNumber);
};

module.exports = {
  findWarrantyBySerialNumber
};