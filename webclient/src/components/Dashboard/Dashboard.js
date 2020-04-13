import React from "react";
import { Row, Col } from "reactstrap";

const styles={
  container: {
    padding: 0,
    margin: 0
  },
  sidebar: {
    minHeight: "98vh",
    border: "1px solid #333"
  },
  content: {
    minWidth: "100%",
    minHeight: "98vh"
  }
}
export default class Dashboard extends Component{
  render() {
    return (
      <Row style={styles.container}>
        <Col xs="4" xl="3" style={styles.sidebar}>

        </Col>
        <Col xs="8" xl="9" style={styles.content}>

        </Col>
      </Row>
    )
  }
}