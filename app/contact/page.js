import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4">For any inquiries or questions, feel free to reach out to us:</p>
      <ul className="mb-4">
        <li>
          <FaEnvelope className="inline-block mr-2 text-gray-500" />
          <a href="mailto:lalit745kumar@gmail.com">lalit745kumar@gmail.com</a>
        </li>
        <li>
          <FaPhone className="inline-block mr-2 text-gray-500" />
          <a href="tel:+1234567890">+1234567890</a>
        </li>
        <li>
          <FaLinkedin className="inline-block mr-2 text-gray-500" />
          <a href="https://www.linkedin.com/in/lalit-kumar-67294326a" target="_blank" rel="noopener noreferrer">lalit Kumar</a>
        </li>
        <li>
          <FaGithub className="inline-block mr-2 text-gray-500" />
          <a href="https://github.com/Lalit-799" target="_blank" rel="noopener noreferrer">/Lalit-799</a>
        </li>
      </ul>
      <p>We look forward to hearing from you!</p>
    </div>
  </div>
  )
}

export default Contact