import { Badge, Container } from "react-bootstrap";
import { skillsData } from "../../data";
import "./Skills.css"
function Skills() {
  return (

      <Container>
        {skillsData.map((category, idx) => (
          <div key={idx} className="text-center">
            {/* <h4>{category.name}</h4> */}
            <div className="d-flex flex-column w-100 gap-1">
              {category.skills.map((skill, i) => (
                <Badge
                  key={i}
                  pill
                  bg="dark"
                  className="skill_item fs-5 p-2 m-1 bg-opacity-75"
                  onClick={() => handleClickSkill(skill)}
                  style={{ cursor: "pointer", fontSize: "1.1rem" }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </Container>
  );
}

export default Skills;
