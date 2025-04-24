// import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view shadow rounded p-4">
//       {/* About Me Title */}
//       <div className="text-center mb-3">
//         <h3 className="purple">About Me</h3>
//       </div>

//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Sagnik Das</span> from <span className="purple">West Bengal, India.</span>
//             <br />
//             I am a <span className="purple">software developer</span>.
//             <br />
//             I am currently pursuing my <span className="purple">B.Tech degree</span> from Lovely Professional University.
//           </p>

//           {/* Education Section */}
//           <Card className="mt-4 p-3 border-0 shadow-sm">
//             <Card.Body>
//               <Card.Title>
//                 <span className="purple">Education</span>
//               </Card.Title>
//               <ListGroup variant="flush">
//                 <ListGroup.Item>
//                   <strong>Lovely Professional University</strong>, Punjab, India<br />
//                   B.Tech in Computer Science & Engineering; CGPA: 7.16 (Since August 2022)
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Bankura Banga Vidyalaya</strong>, Bankura, West Bengal<br />
//                   Intermediate; Percentage: 85% (April 2018 - March 2022)
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Bankura Zilla School</strong>, Bankura, West Bengal<br />
//                   Matriculation; Percentage: 51% (April 2016 - March 2020)
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card.Body>
//           </Card>

//           <p style={{ textAlign: "justify", marginTop: "1rem" }}>
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ListGroup className="mb-3">
//             <ListGroup.Item className="about-activity">
//               <ImPointRight className="purple" /> Playing Games
//             </ListGroup.Item>
//             <ListGroup.Item className="about-activity">
//               <ImPointRight className="purple" /> Writing Tech Blogs
//             </ListGroup.Item>
//             <ListGroup.Item className="about-activity">
//               <ImPointRight className="purple" /> Travelling
//             </ListGroup.Item>
//           </ListGroup>

//           <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
//             "Strive to build things that make a difference!"
//           </p>
//           <footer className="blockquote-footer">
//             <span className="purple">Sagnik</span>
//           </footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;



import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ImPointRight } from "react-icons/im";
import { FaFutbol, FaPenNib, FaHiking, FaWater } from "react-icons/fa"; // Icons from react-icons


function AboutCard() {
  return (
    <Card className="quote-card-view shadow rounded p-4 border-0">
      <div className="text-center mb-4">
        <h1 className="purple fw-bold">About Me</h1>
      </div>

      <Card.Body>
        <blockquote className="blockquote mb-4">
          <p className="text-justify fs-4">
            Hi Everyone, I am <span className="purple fw-semibold"></span> from <span className="purple fw-semibold">West Bengal, India</span>.
            <br />
            I am a <span className="purple fw-semibold">software developer</span> currently pursuing my <span className="purple fw-semibold">B.Tech degree</span> from Lovely Professional University.
          </p>
        </blockquote>

     
          <Card.Body>
            <Card.Title className="purple fs-3 fw-bold mb-3">Education</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent fs-5 text-white">
                <strong className="purple">Lovely Professional University</strong>, Punjab, India<br />
                B.Tech in Computer Science & Engineering; CGPA: 8.5 (Since August 2022)
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent fs-5 text-white">
                <strong className="purple">Namkhana Narayan Vidyamandir</strong>, Narayanpur, WB<br />
                Intermediate; Percentage: 95% (April 2018 - March 2022)
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent fs-5 text-white">
                <strong className="purple">Namkhana Narayan Vidyamandir</strong>, Narayanpur, WB<br />
                Matriculation; Percentage: 95% (April 2016 - March 2020)
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>

          <div className="mb-4">
  <p className="text-justify fs-4 text-light">Apart from coding, here are some activities I love to do:</p>
  <div className="d-flex flex-column gap-3">
    <div className="d-flex align-items-center gap-3 transparent-hobby">
      <FaFutbol size={28} className="text-purple" />
      <span className="fs-5 text-light">Soccer ⚽</span>
    </div>
    <div className="d-flex align-items-center gap-3 transparent-hobby">
      <FaPenNib size={26} className="text-purple" />
      <span className="fs-5 text-light">Writing Tech Blogs</span>
    </div>
    <div className="d-flex align-items-center gap-3 transparent-hobby">
      <FaHiking size={28} className="text-purple" />
      <span className="fs-5 text-light">Trekking 🏔️</span>
    </div>
    <div className="d-flex align-items-center gap-3 transparent-hobby">
      <FaWater size={28} className="text-purple" />
      <span className="fs-5 text-light">Surfing 🏄</span>
    </div>
  </div>
</div>

        <p className="fst-italic fs-5" style={{ color: "rgb(155 126 172)" }}>
          "Code is like humor. When you have to explain it, it’s bad."
        </p>
        <footer className="blockquote-footer mt-2 fs-5">
          <span className="purple">Cory House</span>
        </footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
