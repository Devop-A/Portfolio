import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    emailjs.sendForm('service_su878ra', 'template_j45q4do', e.target, '-MeUT199xL4RU2EBO')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!"); // Provide user feedback (success)
      }, (error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again."); // Provide user feedback (error)
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>
            </div>
          </div>
          {/* form */}
          <form onSubmit={sendEmail} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input
              name='user_name'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text' 
              placeholder='Your Name'
              required
            />
            <input
              name='user_email'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='email' 
              placeholder='Your Email'
              required
            />
            <textarea
              name='message'
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder='Your Message'
              required
            ></textarea>
            <button className='btn btn-lg' type='submit'>Send message</button>
          </form> 
        </div>
      </div>
    </section>
  );
};

export default Contact;