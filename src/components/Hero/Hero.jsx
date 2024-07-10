import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' className='profile_img_adj' />
        <h1><span>I'm Azaz Mohammad,</span> Mern Stack Developer from Kolkata.</h1>
        <p>As a skilled MERN stack developer, I specialize in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. With strong expertise in both front-end and back-end development, I create seamless, user-friendly experiences.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href='../../assets/Azaz_Mohammad_Resume.pdf' download="Azaz_Mohammad_Resume.pdf">My resume</a></div>
        </div>
      
    </div>
  )
}

export default Hero
