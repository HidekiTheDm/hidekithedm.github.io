import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#ffd900">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#ffd900", color: "#202020" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Escola Secundária de Coruche.
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#ffd900", color: "#202020" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            World Academy
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Professional Degree 
          </h4>

          <p> Video Game Developement </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - On going (finishing)"
          iconStyle={{ background: "#ffd900", color: "#202020" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Instituto Politécnico de Viseu - Escola Superior de Tecnologia e Gestão de Viseu.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Licentiate Degree
          </h4>

          <p> Tecnology and Design of Multimedia</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="On going"
          iconStyle={{ background: "#ffd900", color: "#202020" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Inklusion
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            College Intership
          </h4>

          <p> Developement of Video Game Project</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
