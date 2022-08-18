
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../userContext'
import '../styles/product.css'


export default function Product({productProp}){

	const { user } = useContext(UserContext)


	
	




	const {pictures,_id,product}  = productProp

	return(
		
					
						<div className="product-card-icon">
							<Link  to={`/product/${_id}`}><img className="product-image"src={pictures} alt=""/></Link>
							<h1>{product}</h1>
						</div>
					
		
		)
}