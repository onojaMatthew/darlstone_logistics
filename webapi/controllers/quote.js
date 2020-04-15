const { Quote } = require("../models/quote");

exports.create = (req, res, next) => {
  const {
    pickupAddress,
    pickupCity,
    pickupState,
    pickupZip,
    email,
    phone,
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
    amount,
  } = req.body;

  // call the create api from the front-end then after saving to database, call the method
  // that sends realtime message to the client and pass to it the returned values from the 
  // database. Emit the message from the server while the client listen to the emit call
  // from the server.
  let shipmentTrackingNumber;
  const randomNum = Math.floor(10000000 + Math.random() * 90000000);
  if (pickupState === "Lagos") {
    shipmentTrackingNumber = "1" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else if (pickupState === "Port Harcourt") {
    shipmentTrackingNumber = "2" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else if (pickupState === "Abuja Federal Capital Territory") {
    shipmentTrackingNumber = "3" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else if (pickupState === "Enugu") {
    shipmentTrackingNumber = "4" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else if (pickupState === "Delta") {
    shipmentTrackingNumber = "5" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else if (pickupState === "Kano") {
    shipmentTrackingNumber = "6" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else if (pickupState === "Jos") {
    shipmentTrackingNumber = "7" + randomNum + pickupState.slice(0,3).toUpperCase();
  } else {
    return res.status(400).json({ error: `We don't have a branch in ${pickupState} state`});
  }
  
  let newQuote = new Quote({
    pickupAddress,
    pickupCity,
    pickupState,
    pickupZip,
    email,
    phone,
    amount,
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
    trackingNumber: shipmentTrackingNumber
  });

  return newQuote.save()
    .then(quote => {
      if (!quote) return res.status(400).json({ error: "Failed to process request" });
      res.json(quote);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
}

exports.getQuote = (req, res) => {
  const { quoteId } = req.params;
  if (!quoteId) return res.status(400).json({ error: "Invalid parameter values" });
  Quote.findById({ _id: quoteId})
    .then(quote => {
      if (!quote) return res.status(400).json({ error: "No shipment found" });
      res.json(quote);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
}

exports.getAllQuotes = (req, res) => {
  Quote.find({})
    .then(quotes => {
      if (!quotes) return res.status(400).json({ error: "No records found" });
      res.json(quotes);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
}

exports.deleteQuote = (req, res) => {
  const { quoteId } = req.params;
  if (!quoteId) return res.status(400).json({ error: "Invalid parameter values" });
  Quote.findByIdAndDelete({ _id: quoteId})
    .then(quote => {
      if (!quote) return res.status(400).json({ error: "Failed to delete" });
      res.json({ message: "Deleted successfully" });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
}

exports.updateQuote = (req, res) => {
  const { quoteId } = req.params;
  if (!quoteId) return res.status(400).json({ error: "Invalid parameter values"});
  Quote.findByIdAndUpdate({ _id: quoteId}, { $set: { delivered: true }}, { new: true })
    .then(quote => {
      if (!quote) return res.status(400).json({ error: "Request failed. Try again" });
      res.json({ quote, message: "Request completed" });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
}