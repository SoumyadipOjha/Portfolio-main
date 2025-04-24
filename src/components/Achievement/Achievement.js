import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import "./Achievement.css"; // You can customize this for more styling

function Achievement() {
  const achievements = [
    {
      icon: <FaTrophy size={40} color="#f9a825" />,
      title: "2nd Runner-Up - Build-a-Thon",
      description: "Secured 2nd runner-up position in Build-a-Thon organized by Apna College & Board Infinity, showcasing creativity and initiative."
    },
    {
      icon: <FaAward size={40} color="#4caf50" />,
      title: "State Award in Sports",
      description: "Awarded by the Chief Minister for outstanding achievements in sports."
    },
    {
      icon: <FaMedal size={40} color="#03a9f4" />,
      title: "4+ Hackathons",
      description: "Participated in over four hackathons, building innovative solutions under time constraints."
    },
    {
      icon: <FaTrophy size={40} color="#e91e63" />,
      title: "Event Organizer - Coke Studio",
      description: "Managed and organized events as part of the Coke Studio team, enhancing my leadership and collaboration skills."
    },
    {
      icon: <FaTrophy size={40} color="#9c27b0" />,
      title: "Lead Organizer - Apna College LPU",
      description: "Played a leading role in organizing multiple tech and cultural events under Apna College at LPU."
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements</strong>
        </h1>
        <Row>
          {achievements.map((item, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card className="achievement-card shadow p-3 rounded">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    {item.icon}
                    <h5 className="ms-3 mb-0">{item.title}</h5>
                  </div>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievement;
