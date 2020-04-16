import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Spin } from "antd";
import { Row, Col, Card, CardBody } from "reactstrap";
import Header from "../pages/Header";
import { register } from "../../store/actions/action_user";

const Signup = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [ fullname, setFullname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ phone, setPhone ]  = useState("");
  const [ errors, setErrors ] = useState({});
  const [ message, setMessage ] = useState("");


  const emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

  const formValidation = () => {
    let formValid = true;
    let errors = {};

    if (!fullname || typeof fullname !== "string") {
      formValid = false;
      errors["fullname"] = "Your full name is required";
    } else if (!emailRegex.test(email)) {
      formValid = false;
      errors["email"] = "Invalid email"
    } else if (!password || password.length < 5) {
      formValid = false;
      errors["password"] = "Password must not be less than 5 chanracters long";
    } else if (!phone) {
      formValid = false;
      errors["phone"] = "Phone number is required";
    }

    setErrors(errors);
    return formValid;
  }

  const onRegister = (e) => {
    e.preventDefault();
    if (formValidation()) {
      const data = {
        fullname,
        email,
        password,
        phone
      }

      dispatch(register(data));
    }
  }

  useEffect(() => {
    if (users.registerSuccess === true) {
      setMessage("Account created successfully");
      setInterval(() => {
        props.history.push("/accountl");
      }, 3000);
    } else if (users.error && users.error.length > 0) {
      setErrors(users.error);
    }
  }, [ users ]);

  return(
    <div className="home">
      <Header />
      <section className="wave-container">
        <Row className="justify-content-center">
          <Col xs="8" xl="6" className="home-text">
            <h1>Sign up!</h1>
            <p className="animate-p">Check out my awesome waves!</p>
          </Col>
        </Row>
        <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,256C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
     
       <Row className="justify-content-center">
        <Col xs="10" xl="6">
          <Row>
            {message.length > 0 ? <p style={{ color: "#00ff00", fontWeight: "bold"}}>{message}</p> : null}
            {errors.length > 0 ? <p style={{ color: "#00ff00" }}>{errors}</p> : null}
          </Row>
          <Card className="mb-5">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <h5>Create an account</h5>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="6">
                  <div className="mb-3">
                    <label htmlFor="name">Full Name</label>
                    <Input 
                      placeholder="Full Name"
                      value={fullname}
                      id="name"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    <span style={{ color: "#ff0000" }}>{errors["fullname"]}</span>
                  </div>
                </Col>
                <Col xs="12" xl="6">
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <Input 
                      placeholder="Email"
                      type="email"
                      value={email}
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span style={{ color: "#ff0000" }}>{errors["email"]}</span>
                  </div>
                </Col>
              </Row>
              
              <Row>
                <Col xs="12" xl="6">
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <Input 
                      placeholder="Enter password"
                      type="password"
                      value={password}
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span style={{ color: "#ff0000" }}>{errors["password"]}</span>
                  </div>
                </Col>
                <Col xs="12" xl="6">
                  <div className="mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <Input 
                      placeholder="Phone"
                      type="text"
                      value={phone}
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span style={{ color: "#ff0000" }}>{errors["phone"]}</span>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs="12" xl="12">
                  <Button type="primary" 
                    style={{ width: "100%",
                    background: "rgb(9, 7, 36)"
                    }}
                    onClick={(e) => onRegister(e)}
                  >Create Account</Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="12" xl="12">
                  <p>Already have an account? <Link to="/accountl">Login</Link></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Signup;