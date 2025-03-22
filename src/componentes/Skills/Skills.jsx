// import { Badge, Container } from "react-bootstrap";
// import { useApp } from "../../context/AppContext";

// function Skills({ onSkillSelect }) {
//   const { skillsData, setSelectedSkill } = useApp();

//   const handleClickSkill = (skill) => {
//     setSelectedSkill(skill);
//     onSkillSelect();
//   };

//   return (

//       <Container>
//         {skillsData.map((category, idx) => (
//           <div key={idx} className="text-center">
//             {/* <h4>{category.name}</h4> */}
//             <div>
//               {category.skills.map((skill, i) => (
//                 <Badge
//                   key={i}
//                   pill
//                   bg="success"
//                   className="m-2 p-3 bg-opacity-75"
//                   onClick={() => handleClickSkill(skill)}
//                   style={{ cursor: "pointer", fontSize: "1.1rem" }}
//                 >
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Container>
//   );
// }

// export default Skills;




// import { Container } from "react-bootstrap";
// import { useApp } from "../../context/AppContext";
// import "./Skills.css"

// function Skills({ onSkillSelect }) {
//   const { skillsData, setSelectedSkill } = useApp();

//   const handleClickSkill = (skill) => {
//     setSelectedSkill(skill);
//     onSkillSelect();
//   };

//   return (
//     <Container className="skills-container">
//       {skillsData.flatMap(category => category.skills).map((skill, i) => (
//         <div 
//           key={i}
//           className="skill-card"
//           onClick={() => handleClickSkill(skill)}
//         >
//           {skill}
//         </div>
//       ))}
//     </Container>
//   );
// }

// export default Skills;




import { Container } from "react-bootstrap";
import { useApp } from "../../context/AppContext";
import "./Skills.css";

function Skills({ onSkillSelect }) {
  const { skillsData, setSelectedSkill } = useApp();
  
  const handleClickSkill = (skill) => {
    setSelectedSkill(skill);
    onSkillSelect();
  };

  return (
    <Container className="skills-container">
      {skillsData.flatMap(category => category.skills).map((skill, i) => (
        <div 
          key={i}
          className="skill-card"
          onClick={() => handleClickSkill(skill)}
          style={{ animationDelay: `${i * 0.2}s` }} // Diferentes tiempos de inicio
        >
          {skill}
        </div>
      ))}
    </Container>
  );
}

export default Skills;
