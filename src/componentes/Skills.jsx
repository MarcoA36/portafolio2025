
import { Badge } from "react-bootstrap";
import { useApp } from "../context/AppContext";

function Skills({ onSkillSelect }) {  
  const { skillsData, setSelectedSkill } = useApp(); 

  const handleClickSkill = (skill) => {
    setSelectedSkill(skill); 
    onSkillSelect(); 
  };

  return (
    <section id="habilidades" className="py-5">
      <h2 className="text-center mb-3">Tecnologías</h2>
      {skillsData.map((category, idx) => (
        <div key={idx} className="text-center">
          {/* <h4>{category.name}</h4> */}
          <div>
            {category.skills.map((skill, i) => (
              <Badge
                key={i}
                pill
                bg="primary"
                className="m-2 p-3"
                onClick={() => handleClickSkill(skill)} 
                style={{ cursor: "pointer", fontSize: "1.1rem" }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
