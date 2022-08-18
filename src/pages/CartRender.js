import Swal from 'sweetalert2'
import {useState, useEffect} from 'react'
import UserContext from '../userContext'
import Cart from '../components/Cart'
import CartEmpty from '../components/CartEmpty'
import '../styles/cart.css'





export default function CartRender(){

	
	const [cart, setCart] = useState([])
	const [total, setTotal] = useState(0)
	const [display, setDisplay] = useState(false)

	const displayCart = () => {

		setDisplay(!display)
	}

const Purchase = () =>{

		fetch(`https://gabbydesign.herokuapp.com/orders/purchase`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}


		})

		.then(res => res.json())
			.then(data => {


				setDisplay(!display)

			if(data == true){	
				Swal.fire({
					title: "Thank You for Purchasing",
					icon: "success",
					
				})
			}else{
				Swal.fire({
					title: "Authentication Failed",
					icon: "error",
					text: "Check your login details and try again!"
				})
			}
		})

			
	}





	


	useEffect(() => {

		fetch(`https://gabbydesign.herokuapp.com/users/mycart`, {
			headers:{
        		Authorization: `Bearer ${localStorage.getItem('token')}`
      		}
		})
		.then(res => res.json())
		.then(data => {
				

				let total = 0

				console.log(total)
				setCart(data.map(cart => {

					if(cart == null){
						return false

					}else{
							total += cart.cartPrice

					}
					return (
						
						
						<Cart key={cart._id} cartProp={cart} display={displayCart} />
					
					)
				}))
	

				setTotal(total)
				
			})


	},[display])





	

	return(
		
		
		

		<div>
		<h1 className="product-header">MY CART</h1>
		
		
			
			

		
		{cart.length === 0 
			?   <CartEmpty/>
			:  cart




		 }
		<div className="cart-recipe">
				<div>
				<h1 className="cart-total">Total Price:</h1>
				</div>
				<div className="cart-total-price">
				<h1 className="cart-total">₱ {total}</h1>
				</div>
				</div>
				<div className="cart-purchase-btn">
						<button onClick={()=> Purchase()}>purchase Order</button>
					</div> 
		</div>


		



		)
}