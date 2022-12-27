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
import soulsguy from '../assets/TalkToMe.png';
import drillspacer from '../assets/Drill.png';

function Home() {
  return (

    <div className="home">
      <div className="about">
        <h2> Hi, I'm Pedro Pinto!</h2>
        <div className="drillimg">
        <img src={drillspacer}></img>
        </div>
        <div className="prompt">
        <h2> About Me:</h2>
        <h5>
          I usually gravitate more towards the "nerd" type thing in my hobbies, in more detail I have a big interest in the video game area, programming, design, editing, literature and general technology.
          In terms of my past work and projects, I have developed many projects for companies while in college, in a more academic envioremnent, which consisted in mainly android apps, web development and software development. 
          I also spent a lot of my free time as a indie game dev and as freelancing video/photo editor.</h5>
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
          <div className="soulsimg">
        <img src={soulsguy}></img>
          </div>
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
