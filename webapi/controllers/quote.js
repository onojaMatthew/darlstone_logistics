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

  if (!pickupAddress) return res.status(400).json({ error: "Pickup address is required" });
  if (!pickupState) return res.status(400).json({ error: "Pickup state is required" });
  if (!pickupCity) return res.status(400).json({ error: "Pickup city is required" });
  if (!pickupZip) return res.status(400).json({ error: "Pickup zip is required" });
}