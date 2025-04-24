import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evergreen from "../../Assets/Projects/evergreen.jpg";
import freepic from "../../Assets/Projects/freepic.png";
import vms from "../../Assets/Projects/vms.jpg";
import shaliniSaree from "../../Assets/Projects/ShaliniSaree.jpeg";
import weather from "../../Assets/Projects/weather.jpeg";
import medihelp from "../../Assets/Projects/medihelp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shaliniSaree}
              isBlog={false}
              title= {<b className="purple">ShaliniSaree</b>}
              description="Shalini Saree is an elegant saree-selling platform offering a curated collection of traditional and modern styles. Built with MRRN, it features a smooth shopping experience with admin control and user-friendly design."
              ghLink="https://github.com/SoumyadipOjha/ShaliniSaree-Frontend"
              demoLink="https://shaliniisaree.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medihelp}
              isBlog={false}
              title={ <b className="purple">MEDIHELP</b>}
              description="MediHelp is a smart healthcare web app designed to simplify appointment booking, and manage patient needs efficiently. With features like product sliders, it ensures a seamless user experience from browsing to booking."
              ghLink="https://github.com/SoumyadipOjha/HealthCare"
              demoLink="https://mediihelp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vms}
              isBlog={false}
              title={ <b className="purple">AGAMAN</b>}
              description="Visitor Management System is a secure and efficient web app that streamlines visitor check-ins, employee-specific notifications . It features personalized access, email alerts, and a dedicated admin dashboard for complete oversight."
              ghLink="https://github.com/SoumyadipOjha/VisitorManagementSystem_MoveinSync"
              demoLink="https://agamaan.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evergreen}
              isBlog={false}
              title={<b className="purple">EVERGREEN</b>}
              description="Evergreen Fitness is a dynamic gym website offering online course purchases, BMI and calorie calculators, free diet charts, and real-time member chat. Built with HTML, CSS, JavaScript, and Node.js, it features secure login and a user-friendly interface to support every fitness journey."
              ghLink="https://github.com/SoumyadipOjha/EvergreenFitness"
              demoLink="https://evergreeenfitness.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freepic}
              isBlog={false}
              title={<b className="purple">FREEPIC</b>}
              description="Image Search Site is a sleek and responsive web app that allows users to search and explore high-quality images instantly. Built with React.js and integrated with an external image API, it delivers fast results with a clean, user-friendly interface."
              ghLink="https://github.com/SoumyadipOjha/ImageSearchSite"
              demoLink="https://searchfoto.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title={<b className="purple">SUNFI</b>}
              description="Weather App is a responsive web application that provides real-time weather updates based on user location or searched cities. Built with HTML, CSS, JavaScript, and a weather API, it displays temperature, conditions, and forecasts with a clean and intuitive UI."
              ghLink="https://github.com/SoumyadipOjha/WeatherApp-AzentioTask"
              demoLink="https://weatherforecaastt.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
