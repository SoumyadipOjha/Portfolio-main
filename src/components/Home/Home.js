import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/soumya_whbg-photoaidcom-cropped.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Soumyadip Ojha</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="web-shooter-container">
                <div className="web-line web-line-1"></div>
                <div className="web-line web-line-2"></div>
                <div className="web-line web-line-3"></div>
                <div className="web-line web-line-4"></div>
                <div className="web-line web-line-5"></div>
                <div className="web-line web-line-6"></div>
                <div className="web-ring web-ring-1"></div>
                <div className="web-ring web-ring-2"></div>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
