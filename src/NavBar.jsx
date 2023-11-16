import React, { useState,useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links,social } from './data'
import logo from './logo.svg'
const NavBar = () => {
  const[showLink,setShowLink]=useState(false)
  const toggle =()=>{
    setShowLink(!showLink)
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='logo' />
          <button className='nav-toggle' onClick={toggle}><FaBars/></button>
        </div>
         <div className={showLink?'links-container show-links':'links-container '}>
          <ul className='links'>
            {links.map((link)=>{
              const{id,url,text}=link
              return<li key={id}><a href={url}>{text}</a></li>
            })}
          </ul>
        </div>
        <ul className='social-links'>
          {social.map((socialLink)=>{
            console.log(socialLink);
            const{url,id,icon}=socialLink
            return<li key={id}><a href={url}>{icon}</a></li>
          })}
        </ul>
        
      </div>
    </nav>
  )
}

export default NavBar