import { Link } from 'react-router-dom'
import '../styles/cart.css'


export default function CartEmpty(){


	return(



		<div className="cartEmpty">
			<h1> Your Cart is Empty </h1>
			<Link className="link"to='/all-product'>Shop Now</Link>
		</div>


		)
}