import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from '../../asset/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../asset/menu_open.svg'
import menu_close from '../../asset/menu_close.svg'
import kapil from '../navbar/kapil-logo.jpg'



const Navbar = () => {
  const [menu,setmenu]=useState('Home')
  const menuref=useRef();
  const openmenu=()=>{
    menuref.current.style.right='0px'
  }
  const closemenu=()=>{
    menuref.current.style.right='-350px'
  }


  return (
    <div className="navbar">
      <img src={kapil} alt="" />
      <img src={menu_open} alt="" onClick={openmenu}  className="nav-mob-open"/>

     
      <ul ref={menuref} className="menu-nav">
        <img src={menu_close}  onClick={closemenu} className="nav-mob-close" alt="" />
        
        <li><AnchorLink className="anchor-link"  href="home"><p onClick={()=>setmenu('home')}>Home</p></AnchorLink>{menu==='home'? <img src={underline} alt=" "/>: <> </> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#About"><p onClick={()=>setmenu('about')}>About </p> </AnchorLink>  {menu==='about'? <img src={underline} alt=" "/>: <> </> } </li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setmenu('work')}>Portfolio</p> </AnchorLink> {menu==='work'? <img src={underline} alt=" "/>: <> </> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#service"><p onClick={()=>setmenu('service')}>Service</p> </AnchorLink>  {menu==='service'? <img src={underline} alt=" "/>: <> </> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setmenu( 'contact')}>Contact</p> </AnchorLink>  {menu==='contact'? <img src={underline} alt=" "/>: <> </> }</li>
      </ul>
      <div className="connect"> <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setmenu( 'contact')}>Connect with me</p> </AnchorLink>
        
      </div>
    </div>
  );
};

export default Navbar;
