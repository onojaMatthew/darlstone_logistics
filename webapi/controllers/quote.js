const { Quote } = require("../models/quote");

exports.create = (req, res, next) => {
  const {
    pickupAddress,
    pickupCity,
    pickupState,
    pickupZip,
    destinationAddress,
    destinationCity,
    destinationState,
    destinationZip,
    packageInfo,
    weight,
    dimension,
    specialInstruction,
    numOfPieces,
    companyName,
    contactLName,
    contactFName,
  } = req.body;

  
}