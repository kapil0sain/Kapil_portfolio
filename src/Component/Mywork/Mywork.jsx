import React from 'react'
import './Mywork.css'
import theme from '../../asset/theme_pattern.svg'
import work from '../../asset/mywork_data'
import arrow from '../../asset/arrow_icon.svg'

const Mywork = () => {
  return (
    <>
    <div id='work' className='Mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme} alt="" />
        </div>

        <div className="Mywork-container">
            {work.map((work,i)=>{
                return <img src={work.w_img} alt="" id='image' key={i} /> 
            })}  </div>

            
          <div className="mywork-showmorw">
             <p>Show More</p>
             <img src={arrow} alt="" />
        
          </div>

         


    </div>
    
    
    </>
    
  )
}

export default Mywork