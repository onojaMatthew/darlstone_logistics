import React from "react";
import { Input } from "antd";

const RequestSummary = ({
  companyName,
  contactFName,
  contactLName,
  email,
  phone,
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
}) => {
  return(
    <div>
      <div className="mb-3">
        <label htmlFor="company">Company Name</label>
        <Input 
          value={companyName}
          id="company"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="firstName">Contact first name</label>
        <Input 
          value={contactFName}
          id="firstName"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName">Contact last name</label>
        <Input 
          value={contactLName}
          id="lastName"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={email}
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone">Phone Number</label>
        <Input 
          value={phone}
          id="phone"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickadd">Pick-up Address</label>
        <Input 
          value={pickupAddress}
          id="pickadd"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickcity">Pick-up City</label>
        <Input 
          value={pickupCity}
          id="pickcity"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickstate">Pick-up State</label>
        <Input 
          value={pickupState}
          id="pickstate"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickzip">Pick-up Zip</label>
        <Input
          id="pickzip"
          type="email"
          value={pickupZip}
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desa">Destination Address</label>
        <Input 
          value={destinationAddress}
          id="desa"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc">Destination City</label>
        <Input 
          value={destinationCity}
          id="desc"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desst">Destination State</label>
        <Input 
          value={destinationState}
          id="desst"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dessz">Destination Zip</label>
        <Input 
          value={destinationZip}
          id="dessz"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="packInf">Package Information</label>
        <Input 
          value={packageInfo}
          id="packInf"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="num">Number of Pieces</label>
        <Input 
          value={numOfPieces}
          id="num"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="weight">Weight</label>
        <Input 
          value={weight}
          id="weight"
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dimension">Dimension</label>
        <Input
          id="dimension"
          type="text"
          value={dimension}
          readonly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="instruction">Special Instruction</label>
        <Input 
          value={specialInstruction}
          id="instruction"
          readonly
        />
      </div>
    </div>
  )
}

export default RequestSummary;