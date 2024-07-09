import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt='' className='profile_image_adj' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a skilled MERN stack developer with a strong background in building dynamic and responsive web applications. I specialize in using MongoDB, Express.js, React.js, and Node.js to create full-stack applications. My expertise includes front-end development with React, back-end development with Node.js and Express, and database management with MongoDB.</p>
                    <p>I have done 6 month Internship as a Full Stack Developer in Appzillians PVT LTD.I am passionate about developing efficient and scalable solutions, and I enjoy tackling challenging problems in web development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>MongoDb</p><hr style={{width: "75%"}} /></div>
                    <div className="about-skill"><p>Express Js</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width: "65%"}} /></div>
                    <div className="about-skill"><p>Mysql</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>Vue Js</p><hr style={{width: "65%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Tailwind CSS</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>C Language</p><hr style={{width: "80%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "76%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>PHP and Laravel</p><hr style={{width: "75%"}} /></div>
                    <div className="about-skill"><p>Git & Github</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>DSA</p><hr style={{width: "75%"}} /></div>

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+ </h1>
                <p>LIVE PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+ </h1>
                <p>PERSONAL PROJECTS COMPLETED</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
