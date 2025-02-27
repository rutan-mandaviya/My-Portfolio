import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // EmailJS package import karein

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Default form submission rokna

    // EmailJS ke credentials
    const serviceID = 'service_8o1hifj'; // Apna service ID daalein
    const templateID = 'template_lwa1owh'; // Apna template ID daalein
    const userID = 'nYU1QvSjdLDcgBJoq'; // Apna user ID daalein

    // EmailJS ke through email bhejna
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Form ko clear karein
        setShowForm(false); // Form ko hide karein
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 mt-10 px-4 sm:px-8 font-[Montserrat]">
      {/* Heading Section */}
      <div className="relative flex items-center justify-center w-full h-20 bg-black">
        <div className="absolute flex items-center justify-center w-full">
          <div className="w-1/4 border-t border-gray-600 hidden sm:block"></div>
          <span className="mx-4 text-zinc-500 italic text-lg font-sans">Reach Out Anytime</span>
          <div className="w-1/4 border-t border-gray-600 hidden sm:block"></div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-[Lobster] text-center">
        Let's Stay <span className="text-zinc-700">Connected</span>
      </h1>

      {/* Description */}
      <p className="w-[70%] sm:w-[40%] text-zinc-600 font-medium text-xs sm:text-sm text-center">
        Let's connect! Whether you have a project in mind or just want to chat, I'm always open to new opportunities and collaborations.
      </p>

      {/* Contact Button */}
      <button
        onClick={toggleForm}
        className="relative bg-black my-2 text-white rounded-full border-2 border-zinc-800 hover:border-white hover:transition-ease hover:duration-900 px-5 py-3 text-sm sm:text-[15px] font-semibold flex gap-2 justify-center items-center shadow-[0px_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_6px_95px_rgba(255,255,255,0.4)] transition-all duration-300"
      >
        <i className="ri-arrow-right-up-long-line text-lg"></i> Contact Me
      </button>

      {/* Contact Form */}
      {showForm && (
        <div className="w-full max-w-md mt-6 p-6 bg-zinc-900 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Social Media Links */}
      <div className='flex items-center justify-center gap-5 my-3'>
        <a href='https://in.linkedin.com/in/rutan-mandaviya-966877266' target='_blank' rel="noopener noreferrer" className='text-zinc-600 text-[25px] hover:text-white px-4 '><i className="ri-linkedin-box-fill"></i> </a>
        <span className='inline-block h-6 w-[1.1px] bg-zinc-800 '></span>
        <a href='https://github.com/rutan-mandaviya' target='_blank' rel="noopener noreferrer" className='text-zinc-600 text-[25px] hover:text-white px-4 '><i className="ri-github-fill"></i></a>
        <span className='inline-block h-6 w-[1.1px] bg-zinc-800 '></span>
        <a href='https://www.instagram.com/rutan_mandaviya?igsh=N21kcnUwcTB6NTR6' target='_blank' rel="noopener noreferrer" className='text-zinc-600 text-[25px] hover:text-white px-4 '><i className="ri-instagram-line"></i> </a>
      </div>

      {/* Email */}
      <a href="mailto:rutanmandaviya14@gmail.com" className="text-zinc-100 font-[cursive] text-sm hover:text-white">
        rutanmandaviya14@gmail.com
      </a>

      {/* Video Background Bar */}
      <div className="w-full h-1 mt-10 sm:mt-20 overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 relative">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/12716-241674181_large.mp4" autoPlay muted loop></video>
      </div>
    </div>
  );
}

export default Contact;