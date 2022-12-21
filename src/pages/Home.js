import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import PedroCV from '../assets/PedroCV.pdf'
import{BsCodeSquare} from 'react-icons/bs';
import{CiServer} from 'react-icons/ci';
import{BiCode} from 'react-icons/bi';
import{AiOutlineEdit} from 'react-icons/ai';
import{BiGame} from 'react-icons/bi';
import{BsArrowBarRight} from 'react-icons/bs';
import{BsArrowBarLeft} from 'react-icons/bs';

function Home() {
  return (

    <div className="home">
      <div className="about">
        <h2> Hi, I'm Pedro Pinto!</h2>
        <div className="prompt">
        <BiCode/><p>Software/Web/Game Dev || Editor || Multimedia || Design </p>
          <a href="https://www.linkedin.com/in/pedro-pinto-ipv/" target="_blank"><LinkedInIcon /></a>
          <a href="mailto:pedroalmeida.cch@gmail.com" target="_blank"><EmailIcon /></a>
          <a href="https://github.com/HidekiTheDm" target="_blank"><GithubIcon /></a>
        </div>
        <div>
        <a href={PedroCV} download className='btn'><BsArrowBarRight/>Download CV <BsArrowBarLeft/></a>
        </div>
      </div>
      
      <div className="skills">
        <h1><BiGame/> Skills <BiGame/></h1>
        <ol className="list">
          <li className="item">
            <h4> <BsCodeSquare/> Front-End</h4>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap. 
            </span>
          </li>
          <li className="item">
            <h4><CiServer/>Back-End</h4>
            <span>
              NodeJS, ExpressJS, MySQL, MS SQL, PHP.
            </span>
          </li>
          <li className="item">
            <h4> <BiCode/> Languages</h4>
            <span>JavaScript, C#, Sql, Java, Kotlin.</span>
          </li>
          <li className="item">
            <h4><AiOutlineEdit/>Editing</h4>
            <span>Adobe: Photoshop, Illustrator, Premier, After Effects, Animate, InDesign, Xd, Lightroom.
                  Other Software: Blender, Unity, Maya, Clipaint Studios, Android Studios.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
