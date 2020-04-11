import React from 'react';
import { Radio } from "antd";
import { Row, Col } from "reactstrap";

const PaymentOption = () => {
  return(
    <div>
      <Row className="justify-content-center">
        <Col xs="10" xl="5">
          <h3>Select a Payment Option</h3>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Credit Card</Radio>
            <Radio value={2}>Pay on Delivery</Radio>
          </Radio.Group>
        </Col>
      </Row>
      
    </div>
  );
}

export default PaymentOption;