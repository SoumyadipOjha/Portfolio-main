import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Certifications.css"; 
function Certifications() {
  const certData = [
    {
      title: "Cloud Computing",
      link: "https://example.com/certificate1",
      imgPath: require("../../Assets/Certificates/c1.png"),
    },
    {
      title: "Web Development",
      link: "https://example.com/certificate2",
      imgPath: require("../../Assets/Certificates/c2.png"),
    },
    {
      title: "Computer Networks",
      link: "https://www.coursera.org/account/accomplishments/verify/CFKQFWVY2WLP",
      imgPath: require("../../Assets/Certificates/c3.png"),
    },
    {
      title: "Serverside Scripting",
      link: "https://www.coursera.org/account/accomplishments/verify/QXF5MQBY6MQV",
      imgPath: require("../../Assets/Certificates/c4.png"),
    },
    {
      title: "Software Development",
      link: "https://www.coursera.org/account/accomplishments/verify/QXF5MQBY6MQV",
      imgPath: require("../../Assets/Certificates/c6.png"),
    },
    {
      title: "Design Analysis Algorithms",
      link: "https://www.coursera.org/account/accomplishments/verify/QXF5MQBY6MQV",
      imgPath: require("../../Assets/Certificates/c7.png"),
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h2 className="text-center mb-5  fw-bold display-6 d-flex align-items-center justify-content-center gap-2">
          <b className="purple"> My Recent Certifications</b>
        </h2>
        <Row className="g-4">
          {certData.map((cert, index) => (
            <Col md={4} sm={6} key={index}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="cert-card p-3 shadow-sm rounded border h-100 text-center hover-scale">
                  <img
                    src={cert.imgPath}
                    alt={cert.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <h5 className="purple">{cert.title}</h5>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
