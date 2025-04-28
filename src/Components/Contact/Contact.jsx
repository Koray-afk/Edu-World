import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    formData.append("access_key", "e0256798-eeb8-4484-83e7-a0a153045944");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }


  return (
    <div>
      <div className="contact">
        <div className="contact-left">
            <h3>Share your Thoughts</h3>
            <p>We welcome you to connect with us using the contact form or through the details provided below. start a conversation, we are here and ready to assist you.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> abhiman030@gmail.com</li>
                <li><img src={phone_icon} alt="" /> 9125633331</li>
                <li><img src={location_icon} alt="" /> kanpur , Uttar Pradesh</li>
            </ul>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required/>

            <label>Contact Number </label>
            <input type='tel' placeholder='Enter you Number' name='phone' required/>

            
            <label>Email Id</label>
            <input type='Email' name='Email' placeholder='Enter your Email'/>

            <label>Write Your Message here </label>
            <textarea name='message' rows='6' placeholder='Kya Dikkat hai aapko' required/>

            <button className='btn bkl'>Submit now</button>

          </form>
          <span>{result} </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
