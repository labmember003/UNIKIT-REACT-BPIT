import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import { ImBlog } from "react-icons/im";
import {
  // AiOutlineLogin,
  // AiFillStar,
  AiOutlineHome,
  // AiOutlineFundProjectionScreen,
  // AiOutlineUser,
} from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h1 className="main-name"><strong>UNIKIT</strong></h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Other
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact Us
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> 
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button  target="_blank" className="fork-btn-inner" style={{width:"100%", height:"90%",}}>
              <Nav.Link
               as={Link}
               to="/login"
               onClick={() => updateExpanded(false)}
              >
                SignIn
                </Nav.Link>
                {/* <AiOutlineLogin style={{ fontSize: "1.1em", marginLeft:"10px" }} /> */}
              </Button>
            </Nav.Item>


            {/* <Nav.Item className="fork-btn">
              <Button  target="_blank" className="fork-btn-inner">
                <GoogleOAuth />
              </Button>
            </Nav.Item> */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;
