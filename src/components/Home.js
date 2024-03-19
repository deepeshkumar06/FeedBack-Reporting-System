import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className='feedback-container'>
      <div className="head1">
        <h1>Feedback Reporting System</h1>
       </div>
       <br /><br />
        <div className="service">
        <div className="heading">
          <h1>Our Services</h1>
        </div>
        <div className="content">
          <p>
          At Feedback Reporting System , we understand the crucial role that feedback plays in the growth and success of any organization. That's why we've developed a comprehensive Feedback Reporting System tailored to meet the unique needs of businesses across various industries.<br /><br />
          Our Feedback Reporting System is designed to streamline the process of collecting, analyzing, and acting upon feedback from your customers, employees, and stakeholders. We believe in providing you with actionable insights that empower you to make informed decisions and drive positive change within your organization.
          </p>
        </div>
        </div>
        <div className="about">
        <div className="heading">
          <h1>About us</h1>
        </div>
        <div className="content">
          <p>
          Welcome to Feedback Reporting System, the driving force behind innovative feedback reporting solutions designed to revolutionize the way businesses gather, analyze, and act upon feedback.<br /><br />
          At Feedback Reporting System, our mission is simple: to empower organizations with actionable insights derived from valuable feedback. We strive to facilitate meaningful connections between businesses and their stakeholders, fostering growth, and facilitating continuous improvement.
          </p>
        </div>
        </div>
        <div className="contact-container">
    <div className="head">
      <h1>Contact Us</h1>
    </div>
  <div className="ContactContainer">
    <div className="contact">
      <h3>Location</h3>
      <p>
        <FontAwesomeIcon icon={faLocationDot} className="red-icon"/> IBIBO Group Pvt Ltd. #No 23,
        5th Floor, Indiqube, Leela{" "}
        <span>Galleria Hotel Leela, HAL 2nd Stage, Kodihalli, Bengaluru,</span>{" "}
        <span>Karnataka 560008</span>
      </p>
      <h3>Telephone</h3>
       <p>
      <FontAwesomeIcon icon={faPhone} className="red-icon" /> 099456 00000
      </p>
      <h3>Fax</h3>
      <p>
      <FontAwesomeIcon icon={faFax} className="red-icon"/> (65) 6474 7885
      </p>
      <h3>Email</h3>
      <p>
        <a href="mailto:deepeshkumar.p2004@example.com?subject=Your%20Subject&body=Your%20Message">
        <FontAwesomeIcon icon={faEnvelope} className="red-icon"/> TravelTrove@gmail.com
        </a>
      </p>
    </div>
    <div className="query">
      <div className="text">
        <h1>Reach Out to Us</h1>
      </div>
      <div className="query1">
        <div className="input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone no" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" defaultValue={""} />
        </div>
      </div>
      <div className="submit-btn">
        <button type="submit">Send</button>
      </div>
    </div>
  </div>
  </div>
      </div>
  );
}
