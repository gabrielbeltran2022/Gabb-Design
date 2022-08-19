import { Form, Button,  FloatingLabel} from 'react-bootstrap'
import { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

import '../styles/contact.css'

export default function Contact(){

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [mobileNo, setMobileNo] = useState("")





	return(

			<div className="contact-container">
				<div className="contact-form">
					<div className="contact-info"> 
					<h1>Contact Us</h1>
							<div className="contact-name">
					<Form.Group className="firstName mb-3" controlId="firstName">
		        <Form.Label>First Name </Form.Label>
		        
		        <Form.Control
		        	className="input-firstName" 
			        type="text" 
			        placeholder=" Enter First Name"
			        value={firstName}
			        onChange={e => {
			        	setFirstName(e.target.value)
			        }}
			        
			        required/>
		      	</Form.Group>

		      	<Form.Group className="lastName mb-3" controlId="lastName">
			<Form.Label>Last Name </Form.Label>
		        
		        <Form.Control 

			        type="text" 
			        placeholder=" Enter Last Name"
			        value={lastName}
			         onChange={e => {
			        	setLastName(e.target.value)
			        }}
			        required/>
		      			</Form.Group>
		      	
		      	</div>

		      		<div className="contact-email">
					<Form.Group className="email-form mb-3" controlId="email">
		        <Form.Label>Email Address</Form.Label>
		        
		        <Form.Control 
			        type="email" 
			        placeholder=" Enter Email"
			        value={email}
			         onChange={e => {
			        	setEmail(e.target.value)
			        }}
			        required/>
		      	</Form.Group>


		      	<Form.Group className="mobileNo mb-3" controlId="mobileNo">
		        <Form.Label>Mobile No. </Form.Label>
		        
		        <Form.Control 
			        type="text" 
			        placeholder=" Enter Mobile No."
			        value={mobileNo}
			         onChange={e => {
			        	setMobileNo(e.target.value)
			        }}
			        required/>
		      			</Form.Group>
		      	</div>
		      	<div className="contact-text">
		      	 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
 
        <Form.Control as="textarea"  placeholder="Message"  className="text-box"/>
      </Form.Group>
      	</div>
      	<div className="contact-btn">
      	<Button variant="primary" type="submit" className="contact-btn1">
		        		Submit
		</Button>
      	</div>
      	<div className="contact-subtext">
      		<p>We have tried to anticipate your questions and address them on our FAQ. If you have any questions, specifically on our return policy and/or shipping time frames, please visit the FAQ.</p>
      	</div>
      </div>
   
				</div>
				<div className="contact-division-2">
      			<h1>We offer a varriety</h1>
      			<h1>of Services</h1>
      			<div className="contact-label">
      				<h3>Email Us at:</h3>
      				<p>beltrangabriel2022@gmail.com</p>
      			</div>
      			<div className="contact-label">
      				<h3>Phone Number:</h3>
      				<p>+639772317124</p>
      			</div>
      			<div className="footer-icon">
						<h1>Follow Me:</h1> 
						<div className="contact-icons">
					<a href="https://www.facebook.com/Loui.beltran" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mini-icons"/></a>
					<a href="https://www.linkedin.com/in/gabriellouisebeltran/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="mini-icons"/></a>
					<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpGgVJvMXGQfcTxWNNgcDRRvKJcjCVZlKnhzwJmhvjplBMcnqDvljPtxCxLvhHfMnsWL" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="mini-icons"/></a>
						</div>
					</div>
      		</div>
			</div>
		)
}