import { DiHtml5, DiCss3, DiJavascript, DiNodejs, DiReact, DiMongodb, DiMysql, DiPhp, DiBootstrap } from "react-icons/di";
const size = 60

const TechIcons = () => (
  <div className="bg-light bg-opacity-75 p-4 rounded-3">
    <DiHtml5 size={size} color="#E34F26" />
    <DiCss3 size={size} color="#1572B6" />
    <DiBootstrap size={size} color="#7952B3" />

    <DiJavascript size={size} color="#F7DF1E" />
    <DiNodejs size={size} color="#339933" />
    <DiReact size={size} color="#61DAFB" />
   
    <DiPhp size={size} color="#777BB4" />

    

    <DiMongodb size={size} color="#47A248" />
    <DiMysql size={size} color="#4479A1" />
  </div>
);

export default TechIcons;
