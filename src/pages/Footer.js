import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

export default function Footer(){



	return(
		<>
		<div className="container-footer">
				<div className="body-footer">
					<div className="footer-contact">
						<h1>Contact:</h1>
						<h2>Address:  Phase 5 Package 5 Bagong Silang Caloocan City</h2>
						<h2>Phone: +639772317124</h2>
					</div>
					<div className="footer-icon">
						<h1>Follow Me:</h1> 
						<div className="icons">
					<a href="https://www.facebook.com/Loui.beltran" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mini-icons"/></a>
					<a href="https://www.linkedin.com/in/gabriellouisebeltran/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="mini-icons"/></a>
					<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpGgVJvMXGQfcTxWNNgcDRRvKJcjCVZlKnhzwJmhvjplBMcnqDvljPtxCxLvhHfMnsWL" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="mini-icons"/></a>
						</div>
					</div>
				</div>
		</div>
		<div className="footer-span">
		<span>Terms of Services</span><span>|</span><span>Privacy Policy</span><span>|</span><span>Accessibility</span><span>|</span><span>© 2017-2022 Gabriel Louise Beltran. All Rights Reserved</span>
		</div>

		</>
		)
}