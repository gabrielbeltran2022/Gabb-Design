import '../styles/card.css'
import { Link } from 'react-router-dom'
import { useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'






export default function Card() {

		





	return(

		
		<div className="card-container">
			<div className="card-item">
			<div className="body-card">

			<Link to="all-product"><button className="cardButton" >SHOP NOW</button></Link>
			<h1 className="card-name">Fashion</h1>
			<img src="/images/girl.jpg" alt=""/>
			</div>
			</div>
			<div className="card-item">
			<div className="body-card">	
			<Link to="all-product"><button className="cardButton">SHOP NOW</button></Link>
			<h1 className="card-name">Style</h1>
			<img src="/images/boy.jpg" alt=""/>
			</div>
			</div>
			<div className="card-item">
			<div className="body-card">
			<Link to="all-product"><button className="cardButton">SHOP NOW</button></Link>
			<h1 className="card-name">Design</h1>
			<img src="/images/boy2.jpg" alt=""/>
			</div>
			</div>
		</div>
	)
}