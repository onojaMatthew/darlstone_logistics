const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
  companyName: { type: String, required: true },
  contactLName: { type: String, required: true },
  contactFName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pickupAddress: { type: String, require: true },
  pickupCity: { type: String, require: true },
  pickupState: { type: String, require: true },
  pickupZip: { type: String, require: true },
  destinationAddress: { type: String, require: true },
  destinationCity: { type: String, require: true },
  destinationState: { type: String, require: true },
  destinationZip: { type: String, require: true },
  packageInfo: { type: String, required: true },
  weight: { type: String, required: true },
  dimension: { type: String, required: true },
  specialInstruction: { type: String, required: true },
  numOfPieces: { type: String, required: true },
});

const Quote = mongoose.model("Quote", quoteSchema);

exports.Quote = Quote;