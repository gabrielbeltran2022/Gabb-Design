import {useState, useEffect, useContext} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import { Navigate} from 'react-router-dom'
import {useRouter} from 'next/router'
import UserContext from '../userContext'
	








export default function Cart({cartProp, display}){

	
	const router = useRouter()

	const navigate = useNavigate() 
	const {user} = useContext(UserContext)
	const [price, setPrice] = useState(0)
	const [category, setCategory] = useState('')
	const [picture, setPicture] = useState('')
	const [description, setDescription] = useState('')
	const [name, setName] = useState('')
	const [id, setId] = useState('')
	
	


	const {cartPrice,cartCategory,cartPicture,cartDescription,cartProduct,cartId}  = cartProp

	




	const deleteProduct = () =>{

		fetch(`https://gabbydesign.herokuapp.com/users/deleteCart/${cartId}`, {
			method: "DELETE",
			headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}


		})

		.then(res => res.json())
			.then(data => {


				display()

			})
			
	}




useEffect(() =>{

	
	setPrice(cartPrice)
	setCategory(cartCategory)
	setPicture(cartPicture)
	setDescription(cartDescription)
	setName(cartProduct)
	setId(cartId)



},[])









	



	return(
		

		
	<div className="cart-container">
	
		<div className="cart-item">

				<div className="cart-body">
					<div className="cart-remove">
						<button onClick={()=> deleteProduct()}>remove</button>
						
					</div>
					<div className="cart-list">
					<img src={picture}  className="cart-image" alt=""/>
					<div className="cart-info">
					<h1 className="cart-title">{name}</h1>
					
					<h2 className="cart-description">Description</h2>
					<p>{description}</p>
					
					</div>
					<div className="cart-price-info">
					</div>
					<div className="cart-price-info">
					<h2 className="cart-price">Price</h2>
					<h3>₱ {price}</h3>
					</div>
				</div>
				</div>
				
			</div>		
		</div>

		)
}