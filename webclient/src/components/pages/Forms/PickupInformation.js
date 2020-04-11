import React from "react";
import { Input } from "antd";
import { Row, Col } from "reactstrap";

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
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickadd">Pick-up Address</label>
            <Input 
              placeholder="Pick-up address"
              value={pickupAddress}
              id="pickadd"
              onChange={(e) => setPickupAddress(e.target.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickcity">Pick-up City</label>
            <Input 
              placeholder="Pick-up City"
              value={pickupCity}
              id="pickcity"
              onChange={(e) => setPickupCity(e.target.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickstate">Pick-up State</label>
            <Input 
              placeholder="Pick-up State"
              value={pickupState}
              id="pickstate"
              onChange={(e) => setPickupState(e.target.value)}
            />
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickzip">Pick-up Zip</label>
            <Input
              id="pickzip"
              type="email"
              placeholder="Pick-up zip"
              value={pickupZip}
              onChange={(e) => setPickupZip(e.target.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="desa">Destination Address</label>
            <Input 
              placeholder="Destination address"
              value={destinationAddress}
              id="desa"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="desc">Destination City</label>
            <Input 
              placeholder="Destination address"
              value={destinationCity}
              id="desc"
              onChange={(e) => setDestinationCity(e.target.value)}
            />
          </div>
        </Col>
      </Row>
      
      
      
      <Row>
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="desst">Destination State</label>
            <Input 
              placeholder="Destination address"
              value={destinationState}
              id="desst"
              onChange={(e) => setDestinationState(e.target.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="dessz">Destination Zip</label>
            <Input 
              placeholder="Destination zip"
              value={destinationZip}
              id="dessz"
              onChange={(e) => setDestinationZip(e.target.value)}
            />
          </div>
        </Col>
      </Row>
     
     
    </div>
  )
}

export default PickupInformation;