import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Steps, Button } from "antd";
import CompanyInfo from "./Forms/CompanyInfo";
import PickupInformation from "./Forms/PickupInformation";
import PackageInfo from "./Forms/PackageInfo";
import PaymentOption from "./Forms/PaymentOption";
import RequestSummary from "./Forms/RequestSummary";
import Ravepay from "./Ravepay";

const { Step } = Steps;

const Quote = () => {
  const [ count, setCount ] = useState(0);
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
  const [ weight, setWeight ] = useState("");
  const [ dimension, setDimension ] = useState("");
  const [ specialInstruction, setSpecialInstruction ] = useState("");
  const [ cardOption, setCardOption ] = useState(false);
  const [ deliveryOption, setDeliveryOption ] = useState(false);
  
  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const onCardOption = (value) => {
    setCardOption(value);
    setDeliveryOption(false);
  }

  const onDeliveryOption = (value) => {
    setCardOption(false);
    setDeliveryOption(value);
  }
  
  return (
    <div className="quote">
      <section className="wave-container">
        <Row className="justify-content-center">
          <Col xs="8" xl="6" className="home-text">
            <h1>Hello, world!</h1>
            <p className="animate-p">Check out my awesome waves!</p>
          </Col>
        </Row>
        <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,256C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
      <Row className="justify-content-center">
        <Col xs="10" xl="9">
          <Steps current={count} size="small">
            <Step title={count === 0 ? "In Progess" : "Finished"} description="Company Information" />
            <Step title={count < 1 ? "Waiting" : count === 1 ? "In Progress" : "Finished"}  description="Pick-up and Delivery Information." />
            <Step title={count < 2 ? "Waiting" : count === 2 ? "In Progress" : "Finished"} description="Package Information" />
            <Step title={count < 3 ? "Waiting" : count === 3 ? "In Progress" : "Finished"} description="Quote Summary" />
            <Step title={count < 4 ? "Waiting" : count === 4 ? "In Progress" : "Finished"} description="Payment Options" />
          </Steps>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs="9" xl="8">
          {count === 0 ? 
            <CompanyInfo
              companyName={companyName} 
              setCompanyName={setCompanyName}
              contactFName={contactFName}
              setContactFName={setContactFName}
              contactLName={contactLName}
              setContactLName={setContactLName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            /> : 
            count === 1 ? 
            <PickupInformation 
              pickupAddress={pickupAddress}
              pickupCity={pickupCity}
              pickupState={pickupState}
              pickupZip={pickupZip}
              destinationAddress={destinationAddress}
              destinationCity={destinationCity}
              destinationState={destinationState}
              destinationZip={destinationZip}
              setPickupAddress={setPickupAddress}
              setPickupCity={setPickupCity}
              setPickupState={setPickupState}
              setPickupZip={setPickupZip}
              setDestination={setDestination}
              setDestinationCity={setDestinationCity}
              setDestinationState={setDestinationState}
              setDestinationZip={setDestinationZip}
            /> : 
            count === 2 ? 
            <PackageInfo
              packageInfo={packageInfo}
              weight={weight}
              dimension={dimension}
              specialInstruction={specialInstruction}
              numOfPieces={numOfPieces}
              setPackageInfo={setPackageInfo}
              setWeight={setWeight}
              setNumOfPieces={setNumOfPieces}
              setDimension={setDimension}
              setSpecialInstruction={setSpecialInstruction}
            /> : 
            count === 3 ?
            <RequestSummary
            companyName={companyName}
            contactFName={contactFName}
            contactLName={contactLName}
            email={email}
            phone={phone}
            pickupAddress={pickupAddress}
            pickupCity={pickupCity}
            pickupState={pickupState}
            pickupZip={pickupZip}
            destinationAddress={destinationAddress}
            destinationCity={destinationCity}
            destinationState={destinationState}
            destinationZip={destinationZip}
            packageInfo={packageInfo}
            weight={weight}
            dimension={dimension}
            specialInstruction={specialInstruction}
            numOfPieces={numOfPieces}
          /> :

            <PaymentOption 
              onCardOption={onCardOption}
              onDeliveryOption={onDeliveryOption}
            />
          }
        </Col>
      </Row>
      <Row className="justify-content-center mb-5 mt-5">
        <Col xs="9" xl="6">
          <Row>
            <Col xs="6" xl="6">
              <Button 
                type="primary"
                disabled={count === 0}
                onClick={() => decreaseCount()}
              >Previous</Button>
            </Col>
            <Col xs="6" xl="6">
              <Button 
                type="primary"
                disabled={count === 4}
                onClick={() => increaseCount()}
                style={{
                  float: "right"
                }}
              >Next</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {cardOption === true ? 
        <Ravepay /> : deliveryOption === true ? 
        <Button type="primary">Submit</Button> : null}
    </div>
  )
}

export default Quote;