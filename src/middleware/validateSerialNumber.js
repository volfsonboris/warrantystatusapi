const Joi = require('joi');

const serialNumberSchema = Joi.string()
  .pattern(/^SN\d{6}$/)
  .required();

const validateSerialNumber = (req, res, next) => {
  const { error } = serialNumberSchema.validate(req.params.serialNumber);
  
  if (error) {
    return res.status(400).json({
      error: 'Invalid serial number format. Must be "SN" followed by 6 digits'
    });
  }

  next();
};

module.exports = validateSerialNumber;