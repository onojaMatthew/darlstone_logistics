import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Steps } from "antd";

const { Step } = Steps;

const Quote = () => {
  const [ current, setCurrent ] = useState(1);
  const [ companyName, setCompanyName ] = useState("");
  const [ contactFName, setContactFName ] = useState("");
  const [ contactLName, setContactLName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ pickupAddress, setPickupAddress ] = useState("");
  const [ destinationAddress, setDestination ] = useState("");
  const [ pickupZip, setPickupZip ] = useState("");
  const [ destinationZip, setDestinationZip ] = useState("");
  const [ pickupState, setPickupState ] = useState("");
  const [ pickupCity, setPickupCity ] = useState("");
  const [ destinationState, setDestinationState ] = useState("");
  const [ destinationCity, setDestinationCity ] = useState("");
  const [ packageInfo, setPackageInfo ] = useState("");
  const [ numOfPieces, setNumOfPieces ] = useState("");
  const [ wieght, setWeight ] = useState("");
  const [ dimension, setDimension ] = useState("");
  const [ specialInfo, setSpecialInfo ] = useState("");
  return (
    <div>
      <section className="wave-container">
        <Row className="justify-content-center">
          <Col xs="8" xl="6" className="home-text">
            <h1>Hello, world!</h1>
            <p className="animate-p">Check out my awesome waves!</p>
          </Col>
        </Row>
        <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,256C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
      <Row className="justify-content-center">
        <Col xs="11" xl="9">
          <Steps current={current}>
            <Step title={current === 0 ? "In Progess" : "Finished"} description="Company Information" />
            <Step title={current < 1 ? "Waiting" : current === 1 ? "In Progress" : "Finished"}  description="Pick-up and Delivery Information." />
            <Step title={current < 2 ? "Waiting" : current === 2 ? "In Progress" : "Finished"} description="Package Information" />
            <Step title={current < 3 ? "Waiting" : current === 3 ? "In Progress" : "Finished"} description="Payment Options" />
          </Steps>
        </Col>
      </Row>
      <Row className="justify-content-center"></Row>
    </div>
  )
}

export default Quote;