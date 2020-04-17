import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShipment } from "../../store/actions/action_shipment";
import { Row, Col } from "reactstrap";

const ShipmentDetails = () => {
  const shipment = useSelector(state => state.shipment);
  const dispatch = useDispatch();
  const shipmentId = window.location.pathname.slice(0, 12);

  useEffect(() => {
    dispatch(getShipment(shipmentId));
  })

  console.log(shipmentId);
  return (
    <div>
      <Row>
        {/* <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="company">Company Name</label>
            <Input 
              value={companyName}
              id="company"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="firstName">Contact first name</label>
            <Input 
              value={contactFName}
              id="firstName"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="lastName">Contact last name</label>
            <Input 
              value={contactLName}
              id="lastName"
              readOnly
            />
          </div>
        </Col>
      </Row>
      
      
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="phone">Phone Number</label>
            <Input 
              value={phone}
              id="phone"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickadd">Pick-up Address</label>
            <Input 
              value={pickupAddress}
              id="pickadd"
              readOnly
            />
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickcity">Pick-up City</label>
            <Input 
              value={pickupCity}
              id="pickcity"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickstate">Pick-up State</label>
            <Input 
              value={pickupState}
              id="pickstate"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="pickzip">Pick-up Zip</label>
            <Input
              id="pickzip"
              type="email"
              value={pickupZip}
              readOnly
            />
          </div>
        </Col>
      </Row>
     
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="desa">Destination Address</label>
            <Input 
              value={destinationAddress}
              id="desa"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="desc">Destination City</label>
            <Input 
              value={destinationCity}
              id="desc"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="desst">Destination State</label>
            <Input 
              value={destinationState}
              id="desst"
              readOnly
            />
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="dessz">Destination Zip</label>
            <Input 
              value={destinationZip}
              id="dessz"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="packInf">Package Information</label>
            <Input 
              value={packageInfo}
              id="packInf"
              readOnly
            />
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="num">Number of Pieces</label>
            <Input 
              value={numOfPieces}
              id="num"
              readOnly
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" xl="4">
        <div className="mb-3">
          <label htmlFor="weight">Weight</label>
          <Input 
            value={weight}
            id="weight"
            readOnly
          />
        </div>
        </Col>
        <Col xs="12" xl="4">
        <div className="mb-3">
          <label htmlFor="dimension">Dimension</label>
          <Input
            id="dimension"
            type="text"
            value={dimension}
            readOnly
          />
        </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="instruction">Special Instruction</label>
            <Input 
              value={specialInstruction}
              id="instruction"
              readOnly
            />
          </div>
        </Col> */}
      </Row>
    </div>
  )
}

export default ShipmentDetails;