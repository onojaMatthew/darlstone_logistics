import React from "react";
import { Button, Col, Row, Container } from "reactstrap"
import HomeCarousel from "./Carousel";
import Graphic5 from "../../assets/graphic5.jpg"

const styles = {
  mobile: {
    marginTop: 40,
    marginBottom: 40,
    background: "rgb(9, 7, 36)",
    padding: 5,
    fontSize: 10,
    color: "#fff",
    width: "100%",
    borderRadius: 25
  },
  desktop: {
    marginTop: 40,
    marginBottom: 40,
    background: "rgb(9, 7, 36)",
    padding: 10,
    fontSize: 19,
    color: "#fff",
    width: "100%",
    borderRadius: 25
  },
  img: {
    marginTop: -170,
    maxWidth: "100%"
  },
  hww: {
    color: "#000",
    fontSize: 20,
    textAlign: "justify",
    lineHeight: 2,
    marginTop: -50
  }
}
const Home = () => {
  return(
    <div className="home">
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
      <section className="sec2">
        <Container>
          <Row>
            <Col xs="12" xl="4" 
              className="how-we-work"
            >
              <h4 style={{ 
                color: "#000",
                textDecoration: "underline"
              }}>How We Work</h4>
              <p style={{ 
                  color: "#000",
                  fontSize: 20,
                  textAlign: "justify",
                  lineHeight: 2
                }}
              >
                At Darlstone Logistics, we are committed to providing smart and effective Logistics Solutions for every business. With timed deliveries that offer complete flexibility.
              </p>
            </Col>
            <Col xs="6" xl="4"
              style={{
                marginTop: -200,
                maxHeight: "200px"
              }}
            >
              <HomeCarousel />
            </Col>
            <Col xs="12" xl="4" className="home-sideimg">
            <img 
                src={Graphic5} 
                alt=""
                style={navigator.userAgent.match(/Android/i) ? styles.img : 
                  navigator.userAgent.match(/webOS/i) ? styles.img : 
                  navigator.userAgent.match(/iPhone/i) ? styles.img : 
                  navigator.userAgent.match(/iPad/i) ? styles.img : 
                  navigator.userAgent.match(/BlackBerry/i) ? styles.img :
                  navigator.userAgent.match(/Windows Phone/i) ? styles.img :
                  { maxWidth: "100%" }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="4" xl="3">
              <Button className="quote-btn" style={
                navigator.userAgent.match(/Android/i) ? styles.mobile : 
                navigator.userAgent.match(/webOS/i) ? styles.mobile : 
                navigator.userAgent.match(/iPhone/i) ? styles.mobile : 
                navigator.userAgent.match(/iPad/i) ? styles.mobile : 
                navigator.userAgent.match(/BlackBerry/i) ? styles.mobile :
                navigator.userAgent.match(/Windows Phone/i) ? styles.mobile :
                styles.desktop}
              >
                Request Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home;
