import React from 'react'
import './Service.css'
import  theme_pattren from '../../asset/theme_pattern.svg'
import Services_Data from '../../asset/services_data'
import arrow from '../../asset/arrow_icon.svg'

const Service = () => {
  return (
    <div id='service' className='services'>
        <div className='service-title'>
            <h1>My Service</h1>
            <img src={theme_pattren} alt="" />
        </div>
        <div  className='service-container'>
           {Services_Data.map((service,index)=>{
          return <div  key={index} className='service-format'> 
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="service-readmore">
              <p>Read more</p>
              <img src={arrow} alt="" />
            </div>


          </div>

          
        })}</div>

    </div>
  )
}

export default Service