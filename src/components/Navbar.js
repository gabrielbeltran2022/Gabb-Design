import '../styles/navbar.css'
import {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import UserContext from '../userContext'


export default function Navbar({add}){


	const { user } = useContext(UserContext)

	










	return(
		<div className="nav-container">
			<div className="nav-row">
				<div className="nav-col">
					<div className="logo">
						<Link to="/"><img src="/images/logo.png" alt=""/></Link>
					</div>
				
				
				</div>

				<div className="nav-row">
					<nav className="items">	
						<ul className="items">
							<Link  to="/male"><li>MEN</li></Link>
							<Link  to="/female"><li>WOMEN</li></Link>
							<Link  to="/contact"><li>CONTACT</li></Link>
							<Link  to="/About"><li>ABOUT US</li></Link>
							<Link  to="/all-product"><li>PRODUCT</li></Link>
						</ul>
					</nav>
				</div>

				<div className="nav-col">
					<div className="nav-icons">
					{
				
						(user.id !== null)?
						<Link  to="/logout"><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LOGOUT</span></Link>
						:

					
					<Link  to="/login"><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LOGIN</span></Link>
					}

						
						<Link to="/my-cart"><span><FontAwesomeIcon icon={faCartShopping}/><span className="wish-list">{add}</span></span></Link>
					</div>

				</div>

			</div>
			
		</div>


		)

}