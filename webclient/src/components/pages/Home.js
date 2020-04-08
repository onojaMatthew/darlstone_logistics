import React from "react";
import { Button, Col, Row } from "antd"
import HomeCarousel from "./Carousel";

const Home = () => {
  return(
    <div>
      <section className="wave-container">
        <Row className="justify-content-center">
          <Col xs="6" xl="6">
            <h1>Hello, world!</h1>
          < p>Check out my awesome waves!</p>
          </Col>
        </Row>
        
        <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,256C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
      <section className="sec2">
        <Row className="justify-content-center">
          <Col xs="4" xl="6"
            style={{
              marginTop: -200,
              maxHeight: "200px"
            }}
          >
            <HomeCarousel />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="4" xl="2">
            <Button style={{
              
            }}>Request Quote</Button>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default Home;