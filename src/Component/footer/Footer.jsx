import React from 'react'
import './footer.css'
import kapil from '../navbar/kapil-logo.jpg'
import user from '../../asset/user_icon.svg'

const Footer = () => {
  return (
    <div>
<div className="footer">
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={kapil} alt="" />
            <p>I am  passionate full-stack developer with expertise in front-end and back-end technology</p>

            
        </div>
        <div className="footer-top-right">
             <div className="footer-email-input">
                <img src={user} alt="" />
                <input type="text" name='email' placeholder='Enter your email ' />
             </div>
             <div className="footer-subscribes">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <div className="footer-bottom-left">
            2024 kapil sain.All rights reserved

        </div>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>privacy policy</p>
            <p>connect with me</p>

        </div>
    </div>
</div>


        
        
        
        </div>
  )
}

export default Footer