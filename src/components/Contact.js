import React from 'react';

// import contact data
import { contact } from '../data';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z13zrck', 'template_0074qb4', form.current, 'Qft34WD71Ov09GciD')
      .then((result) => {
          console.log(result.text);
          toast.success('messege sent successfull')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            If you want contact me you can email me.
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}
          <form ref={form} onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' name="user_name" />
              <input className='input' type='email' placeholder='Your email' name="user_email" />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea
            name="message"
              className='textarea'
              placeholder='Your message'
            ></textarea>
             <input className='btn btn-lg bg-accent hover:bg-secondary-hover' type="submit" value="Send" />
            
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default Contact;
