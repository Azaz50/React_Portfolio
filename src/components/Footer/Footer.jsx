import React from 'react'
import './Footer.css'
import logo_img from '../../assets/logo_img.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo_img} alt='' className='footer_image_adj'/>
                <p>I am a MERN Stack Developer.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt='' />
                    <input type='email' placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscibe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"><span>&#169;</span> 2024 Azaz Mohammad. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
