import React from "react";
import { Row, Col } from "reactstrap";

const styles={
  container: {
    padding: 0,
    margin: 0
  },
  sidebar: {
    minWidth: "98vh",
    border: "1px solid #333"
  },
  content: {
    
  }
}
export default class Dashboard extends Component{
  render() {
    return (
      <Row>
        <Col xs="4" xl="3">

        </Col>
        <Col xs="8" xl="9">

        </Col>
      </Row>
    )
  }
}