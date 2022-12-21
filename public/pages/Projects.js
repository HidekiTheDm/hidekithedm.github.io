import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import{BiGame} from 'react-icons/bi';
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> <BiGame/> My Personal Projects <BiGame/></h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
