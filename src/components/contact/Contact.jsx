import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

import { FaAsterisk } from 'react-icons/fa'
import './contact.css'

const Contact = () => {

  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("ZdL3UfpuVDG_1ruv7")
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const phoneRegx = /^(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;

    const serviceId = "contact_service";
    const templateId = "contact_form";

    try {
      // check if the Name field is empty
      if(nameRef.current.value === '') {
        throw('Name field must be filled')
      }
      // check if the Email field is empty
      else if(emailRef.current.value === '') {
        throw('Email field must be filled')
      }
      // check if the Email address is valid
      else if(!emailRegx.test(emailRef.current.value)) {
        throw('Enter a valid email address')
      }
      // check if the PhoneNumber field is empty or valid 
      else if(!(phoneRegx.test(phoneRef.current.value) || phoneRef.current.value === '')) {
        throw('Enter a valid phone number')
      }
      // check if the Message field is empty
      else if(messageRef.current.value === '') {
        throw('Message field must be filled')
      }
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        user_name: nameRef.current.value,
        user_email: emailRef.current.value,
        company: companyRef.current.value || '______',
        user_phone: phoneRef.current.value || '______',
        message: messageRef.current.value
      });
      alert("Email successfully sent check inbox");
      toast.success(
        'Email successfully sent. \n I will reply to you soon.',
        {
          duration: 4000,
          position: 'top-center',
          style: {
            padding: '16px',
            color: '#fff',
            background: 'var(--gradient-color)',
            boxShadow: 'var(--box-shadow)',
          },
        }
      );
    } catch (error) {
      console.log(error);
      toast.error(
        `${error}`,
        {
          duration: 4000,
          position: 'top-center',
          style: {
            padding: '16px',
            color: '#fff',
            background: 'var(--gradient-color)',
            boxShadow: 'var(--box-shadow)',
          },
        }
      );
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
                <input type='text' name='email' placeholder='Email' ref={emailRef}/>
            </div>
            <div className='form-group'>
                <input type='tel' name='phonenumber' placeholder='Phone number' ref={phoneRef} />  
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
        <Toaster /> 
    </div>
  )
}

export default Contact