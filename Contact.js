import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact</h2>         
        <ul>
            <li>I'd love to hear from you! Feel free to reach out through the following channels:</li>
            <li>Email: topnazer@gmail.com</li>
            <li>
              Facebook: <a href="https://www.facebook.com/topnazer">Your Facebook Profile</a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
