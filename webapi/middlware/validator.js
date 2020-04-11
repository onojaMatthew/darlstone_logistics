const { body, validationResult } = require('express-validator')
const quoteValidationRules = () => {
  return [
    body("pickupaddress").isLength({ min: 10 }),
    body("pickupCity").isLength({ min: 3 }),
    body("pickupState").isLength({ min: 3 }),
    body("pickupZip").isNumeric().isLength({ min: 5 }),
    body("destinationAddress").isLength({ min: 10 }),
    body("destinationCity").isLength({ min: 3 }),
    body("destinationState").isLength({ min: 3 }),
    body("destinationZip").isLength({ min: 5 }),
    body("packageInfo").isLength({ min: 10 }),
    body("weight").isNumeric(),
    body("dimension").isNumeric(),
    body("specialInstruction").isLength({ min: 20 }),
    body("numOfPieces").isLength({ min: 1 }),
    body("companyName").isLength({ min: 5 }),
    body("contactLName").isLength({ min: 3 }),
    body("contactFName").isLength({ min: 3})
  ]
}

const userValidationRules = () => {
  return [
    body("fullname").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    
  ]
}

const loginValidationRules = () => {
  return [
    body("email").isEmail(),
    body("password").isString().isLength({ min: 5 })
  ]
}
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  quoteValidationRules,
  loginValidationRules,
  validate,
}
