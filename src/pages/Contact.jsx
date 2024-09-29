import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../components/Button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='bg-background min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center text-text'>
          Contact Us
        </h1>
        <div className='max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-2xl font-bold mb-4 text-text'>
                Get in Touch
              </h2>
              <p className='text-text text-opacity-90 mb-6'>
                We&apos;d love to hear from you. Whether you have a question about
                our services, need help with an order, or just want to say
                hello, we&apos;re here for you.
              </p>
              <div className='space-y-4'>
                <p className='flex items-center text-text'>
                  <FaEnvelope className='mr-2 text-accent' />
                  info@flavorfusion.com
                </p>
                <p className='flex items-center text-text'>
                  <FaPhone className='mr-2 text-accent' />
                  +1 (555) 123-4567
                </p>
                <p className='flex items-center text-text'>
                  <FaMapMarkerAlt className='mr-2 text-accent' />
                  123 Foodie Lane, Tasty Town, FL 12345
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-text mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-white bg-opacity-100 rounded-md text-text placeholder-text placeholder-opacity-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent'
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-text mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-white bg-opacity-100 rounded-md text-text placeholder-text placeholder-opacity-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent'
                  placeholder='Enter your email'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-text mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-3 py-2 bg-white bg-opacity-100 rounded-md text-text placeholder-text placeholder-opacity-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent'
                  placeholder='Type your message here'
                  required
                ></textarea>
              </div>
              <Button type='submit' color='accent'>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
