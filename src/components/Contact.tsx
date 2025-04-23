import React from 'react';
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (form.current) {
      emailjs.sendForm(
        'service_7s5k7lq', //service ID
        'template_j8hdf53', //template ID
        form.current,
        '6zzdYtJ7HQXIpxgdx' //public key
      )
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Message sent successfully!');
        if (form.current) form.current.reset();
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send message. Please try again.');
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded-full"></div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Feel free to reach out if you have any questions, want to discuss collaboration opportunities,
              or just want to connect. I'm always open to new challenges and interesting projects!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Email</h3>
                  <a href="mailto:swayam.jethi@gmail.com?subject=Hello%20Swayam&body=I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    swayam.jethi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Bhubaneswar , Odisha , India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Phone</h3>
                  <a href="tel:+11234567890" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 7008613958
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Send Me a Message</h3>
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name" 
                  id="user_name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  placeholder="Chakulia Panda"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  placeholder="chakulia@hotmail.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
