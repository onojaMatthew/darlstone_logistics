import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShipment } from "../../store/actions/action_shipment";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Spin, Input } from "antd"

const ShipmentDetails = () => {
  const shipment = useSelector(state => state.shipment);
  const dispatch = useDispatch();
  const shipmentId = window.location.pathname.slice(11, 35);

  useEffect(() => {
    dispatch(getShipment(shipmentId));
  }, [])

  console.log(shipmentId);
  const shipmentDetails = shipment.shipment
  return (
    <div>
      <Card>
        <CardBody>
          {shipment.getLoading === true ? (
            <div className="text-center"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%"
              }}
            >
              <Spin tip="Loading..." />
            </div>
          ) : (
            <>
            <Row>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="company">Company Name</label>
                  <Input 
                    value={shipmentDetails.companyName}
                    id="company"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="firstName">Contact first name</label>
                  <Input 
                    value={shipmentDetails.contactFName}
                    id="firstName"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="lastName">Contact last name</label>
                  <Input 
                    value={shipmentDetails.contactLName}
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
                    value={shipmentDetails.email}
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <Input 
                    value={shipmentDetails.phone}
                    id="phone"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="pickadd">Pick-up Address</label>
                  <Input 
                    value={shipmentDetails.pickupAddress}
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
                    value={shipmentDetails.pickupCity}
                    id="pickcity"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="pickstate">Pick-up State</label>
                  <Input 
                    value={shipmentDetails.pickupState}
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
                    value={shipmentDetails.pickupZip}
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
                    value={shipmentDetails.destinationAddress}
                    id="desa"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="desc">Destination City</label>
                  <Input 
                    value={shipmentDetails.destinationCity}
                    id="desc"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="desst">Destination State</label>
                  <Input 
                    value={shipmentDetails.destinationState}
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
                    value={shipmentDetails.destinationZip}
                    id="dessz"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="packInf">Package Information</label>
                  <Input 
                    value={shipmentDetails.packageInfo}
                    id="packInf"
                    readOnly
                  />
                </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="num">Number of Pieces</label>
                  <Input 
                    value={shipmentDetails.numOfPieces}
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
                  value={shipmentDetails.weight}
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
                  value={shipmentDetails.dimension}
                  readOnly
                />
              </div>
              </Col>
              <Col xs="12" xl="4">
                <div className="mb-3">
                  <label htmlFor="instruction">Special Instruction</label>
                  <Input 
                    value={shipmentDetails.specialInstruction}
                    id="instruction"
                    readOnly
                  />
                </div>
              </Col>
            </Row>
            </>
          )}
        </CardBody>
      </Card>
      
    </div>
  )
}

export default ShipmentDetails;