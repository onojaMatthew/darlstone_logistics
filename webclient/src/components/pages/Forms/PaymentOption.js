import React from 'react';
import { Radio } from "antd";
import { Row, Col } from "reactstrap";

const PaymentOption = ({
  onCardOption,
  onDeliveryOption
}) => {
  return(
    <div>
      <Row className="justify-content-center">
        <Col xs="10" xl="5">
          <h3>Select a Payment Option</h3>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={"checked"} onChange={(e) => onCardOption(e.target.checked)}>Pay with Credit Card</Radio>
            <Radio value={2} onChange={(e) => onDeliveryOption(e.target.checked)}>Pay on Delivery</Radio>
          </Radio.Group>
        </Col>
      </Row>
      
    </div>
  );
}

export default PaymentOption;