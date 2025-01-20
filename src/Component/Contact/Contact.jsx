import React from 'react'
import './Contact.css'
import theme from '../../asset/theme_pattern.svg'
import mail from '../../asset/mail_icon.svg'
import location from '../../asset/location_icon.svg'
import call from '../../asset/call_icon.svg'

const Contact = () => {
  const onSubmit= async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8d89a17c-10d7-4e8b-b81a-24fd7978fa5f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in TOUCH</h1>
        <img src={theme} alt="" />
      </div>


      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I am currently avaliable to take on new projects, so feel freeto me a message about anything that you want to a workon. you can contact anytime</p>
        

        <div className="contact-details">
          <div className="contact-detail">
            <img src={mail} alt="" /> <p>kapilsainjob@gmail.com</p>

          </div>
          <div className="contact-detail">
            <img src={location} alt="" /> <p>Gurugram  haryana 122004</p>
          </div>
          <div className="contact-detail">
            <img src={call} alt="" />
            <p>
              +91 870-067-2679
            </p>
            
          </div>
        </div>
        </div>

        <form  onSubmit={onSubmit} className='contact-right'>
          
          <label htmlFor="" > Your name</label>

          <input type="text"  placeholder='Enter your name here' name='name'/>

          <label htmlFor="">E-mail</label>
          <input type="email" placeholder='Enter your E-mail here' name='email' />
          <label htmlFor="">Write here your Message</label>
          <textarea name="message" rows='8' placeholder='Enter your message' ></textarea>
          <button type='submit' className=' contact-submit' >Submit now </button>
          

        </form>
      </div>

    </div>
  )
}

export default Contact