import React from 'react'
import './Hero.css'
import profile_img from '../../../asset/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import kapil from '../../../asset/profiles.jpg/'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      
        <img src={kapil} alt="" />

        <h1><span>I'm kapil sain,</span> frontend developer from gurgoan</h1>
         <p>I am  passionate full-stack developer with expertise in front-end and back-end technology</p>
        <div className="hero-action">
          
            <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setmenu( 'contact')}></p>Connect With Me </AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero