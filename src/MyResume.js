import React from "react";
import './resume.css';
import phoneIcon from './phoneicon.png';
import mailIcon from './mailicon.png';
import homeIcon from './homeicon.png';
import dp from "./dpphoto.jpg";

class MyResume extends React.Component{
    render(){
        return(
            <div className="resume">
                <div className="resume-header">
                    <div className="dpPhoto">
                        <img src={dp} alt="dp" className="dpP"></img>
                    </div>
                    <div className="resume-header-left">
                        <h1><u>CHANDHRAMOULI S</u></h1>
                        <h2>Full Stack Developer</h2>
                    </div>
                    <div className="resume-header-right">
                        <h4>+91 7708487255 <img src={phoneIcon} alt="phoneIcon" className="icon"></img></h4>
                        <h4>iamchandhramouli16@gmail.com <img src={mailIcon} alt="mailIcon" className="icon"></img></h4>
                        <h4>Salem, India <img src={homeIcon} alt="homeIcon" className="icon"></img></h4>
                    </div>
                    <div className="header-line">
                    </div>
                </div>
                
                <div className="resume-body">
                    <div className="summary">
                        <h3 className="body-underlined">SUMMARY</h3>
                        <para>Enthusiastic and highly motivated recent graduate with a strong foundation in web development and a passionfor MERN stack technologies. Eager to kickstart a career as a MERN stack developer and leverage my skills in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB to contribute to innovative web development projects.Committed to continuous learning and open to taking on new challenges to grow as a developer and make ameaningful impact in a dynamic team environment.</para>
                    </div>
                    <br/>
                    <div className="content">
                        <div className="body-left">
                            <h3 className="body-underlined">EDUCATION</h3>
                            <p><b>K. S. Rangasamy College of Technology</b></p>
                            <p>B.E - Computer Science and Engineering</p>
                            <p>2017 - 2021</p>
                            <h3 className="body-underlined">SKILLS</h3>
                            <ul>
                                <li>Programming Languages: Java, JavaScript</li>
                                <li>Frameworks: ClientSide - ReactJS,
                                                ServerSide - NodeJS, ExpressJS
                                </li>
                                <li>Web Technologies: HTML, CSS</li>
                                <li>Tools: GitHub, Eclipse, Visual Studio Code</li>
                                <li>Proficient in Data Structures algorithms</li>
                            </ul>
                            <h3 className="body-underlined">CERTIFICATIONS</h3>
                            <p>Full Stack Developer Pro from Imarticus Learning, Coimbatore</p>
                            <p>(May,2023 - Current)</p>
                            <h3 className="body-underlined">PERSONAL DETAILS</h3>
                            <p><b>Date of Birth: </b>16/02/2000</p>
                            <p><b>Languages known: </b>Tamil, English</p>
                        </div>
                        <div className="body-vertical-line">
                        </div>
                        <div className="body-right">
                            <h3 className="body-underlined">PROJECT</h3>
                            <p><b>E-Commerce Platform: </b></p>
                            <ul>
                                <li><para>This comprehensive project encompasses a feature-rich front-end developed with React.js, a back-end powered by Node.js and Express.js, and data storage using MongoDB.</para></li>
                                <li><para>Users can browse products, add them to a shopping cart, and complete the checkout process. I implemented user authentication, product catalog management, and a seamless shopping experience.</para></li>
                                <li><para>This project showcases my ability to work across the entire stack and deliver a functional, user-friendly application.</para></li>
                            </ul>
                            <h3 className="body-underlined">ACHIEVEMENTS</h3>
                            <ul>
                                <li>Secretary of Computer Society of India local student chapter in College</li>
                                <li>Cadet Corporal and 'A' Certificate holder in NCC - Airwing</li>
                                <li>Divisional Level athlete in Swimming</li>
                            </ul>
                            <h3 className="body-underlined">EXTRA CURRICULARS</h3>
                            <ul>
                                <li>Badminton</li>
                                <li>Swimming</li>
                                <li>Football</li>
                                <li>MotorCycling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyResume;