import React from "react";
import { Button } from "antd"

const Home = () => {
  return(
    <div>
      <section className="wave-container">
        {/* <h1>Hello, world!</h1>
        <p>Check out my awesome waves!</p> */}
        <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,256C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
      </section>
      <section className="sec2"></section>
      <Button type="primary">Just a Click</Button>
    </div>
  )
}

export default Home;

{/* <svg id="curve" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99174.01">
          <path 
            className="cls-1"
            d="M0,280.8S283.66, 59, 608.94, 163.56s437.93, 150,808, 10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)"
          />
        </svg> */}