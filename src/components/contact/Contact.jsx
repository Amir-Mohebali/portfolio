import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaAsterisk } from 'react-icons/fa'
import './contact.css'

const Contact = () => {

  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("ZdL3UfpuVDG_1ruv7")
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "contact_service";
    const templateId = "contact_form";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        user_name: nameRef.current.value,
        user_email: emailRef.current.value,
        company: companyRef.current.value,
        message: messageRef.current.value
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='contact-form'>
        <form action='' onSubmit={handleSubmit}>
            <div className='form-group'>
                <FaAsterisk style={{ color: 'red', fontSize: '12px', marginTop: '6px' }} />
                <input type='text' name='fullname' placeholder='Fullname' ref={nameRef}/>
            </div>
            <div className='form-group'>
                {/* <FaAsterisk color="red" fontSize="12px" /> */}
                <input type='text' name='company' placeholder='Company' ref={companyRef}/>
            </div>
            <div className='form-group'>
                <FaAsterisk style={{ color: 'red', fontSize: '12px', marginTop: '6px' }} />
                <input type='email' name='email' placeholder='Email' ref={emailRef}/>
            </div>
            <div className='form-group'>
                {/* <FaAsterisk color="red" fontSize="12px" /> */}
                <input type='number' name='phonenumber' placeholder='Phone number' />
            </div>
            <div className='form-group'>
                <FaAsterisk style={{ color: 'red', fontSize: '12px', marginTop: '6px' }} />
                <textarea name='message' placeholder='Message' cols='30' rows='10' ref={messageRef}></textarea>
            </div>
            <button type='submit' className='button' disabled={loading}>
                <div className='hover'></div>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Contact