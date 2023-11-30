import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Navbar from "../Navbar"
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          {/* <Navbar /> */}
            <Col md={7} className="home-header">
              <h1 style={{marginRight:"100px" }} className="heading">
                <p>Welcome To <span style={{fontSize:"60px"}}><b>UNIKIT</b></span></p>
                <p style={{fontSize:"30px"}}>Empowering Academic Excellence</p>
                {/* <p ></p> */}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                {/* <p style={{fontSize:"30px", marginLeft:"10px"}}>Empowering Academic Excellence</p> */}
                {/* <strong className="main-name"> Streamlined Resource</strong> */}
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                 <strong className="main-name" style={{fontSize:"40px",}}> Streamlined Resources</strong>
                 <Type />
              </div>
              <div className="ComingBtn" style={{ padding: 50, paddingTop:0, textAlign: "left" }}>
                  <button className="C-btn">Coming Soon</button>
                 </div>
            </Col>

            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            </Row>
        </Container>
      </Container>
      <Home2 />
      
    </section>
  );
}

export default Home;
