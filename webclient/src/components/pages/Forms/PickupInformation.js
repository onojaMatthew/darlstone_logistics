import React from "react";
import { Input } from "antd";
const PickupInformation = ({
  pickupAddress,
  pickupCity,
  pickupState,
  pickupZip,
  destinationAddress,
  destinationCity,
  destinationState,
  destinationZip,
  setPickupAddress,
  setPickupCity,
  setPickupState,
  setPickupZip,
  setDestination,
  setDestinationCity,
  setDestinationState,
  setDestinationZip
}) => {
  return(
    <div>
      <div className="mb-3">
        <label htmlFor="pickadd">Pick-up Address</label>
        <Input 
          placeholder="Pick-up address"
          value={pickupAddress}
          id="pickadd"
          onChange={(e) => setPickupAddress(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickcity">Pick-up City</label>
        <Input 
          placeholder="Pick-up City"
          value={pickupCity}
          id="pickcity"
          onChange={(e) => setPickupCity(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickstate">Pick-up State</label>
        <Input 
          placeholder="Pick-up State"
          value={pickupState}
          id="pickstate"
          onChange={(e) => setPickupState(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pickzip">Pick-up Zip</label>
        <Input
          id="pickzip"
          type="email"
          placeholder="Pick-up zip"
          value={pickupZip}
          onChange={(e) => setPickupZip(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desa">Destination Address</label>
        <Input 
          placeholder="Destination address"
          value={destinationAddress}
          id="desa"
          onChange={(e) => setDestination(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc">Destination City</label>
        <Input 
          placeholder="Destination address"
          value={destinationCity}
          id="desc"
          onChange={(e) => setDestinationCity(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desst">Destination State</label>
        <Input 
          placeholder="Destination address"
          value={destinationState}
          id="desst"
          onChange={(e) => setDestinationState(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dessz">Destination Zip</label>
        <Input 
          placeholder="Destination zip"
          value={destinationZip}
          id="dessz"
          onChange={(e) => setDestinationZip(e.value)}
        />
      </div>
    </div>
  )
}

export default PickupInformation;