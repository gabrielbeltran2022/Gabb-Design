import { Navigate} from 'react-router-dom'
import{useState, useEffect, useContext} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import UserContext from '../userContext'
import '../styles/productview.css'





export default function ProductView({add}){


		const { user, setUser } = useContext(UserContext)
		const {productId} = useParams()		
		const [cart, setCart] = useState([])
		const [product, setProduct] = useState("")
		const [productDescription, setProductDescription] = useState("")
		const [category, setCategory] = useState("")
		const [priceProduct, setPriceProduct] = useState(0)
		const [pictures, setPictures] = useState("")

		

		
		const addCart = (productId)=> {
			
			fetch(`https://gabbydesign.herokuapp.com/products/addcart`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},


				body:JSON.stringify({
					cartId: productId,
					cartProduct: product,
					cartDescription: productDescription,
					cartCategory: category,
					cartPrice: priceProduct,
					cartPicture: pictures
				})
			})

			.then(res => res.json())
			.then(data => {
				console.log(data)


				add()





			})

		}






		useEffect(() => {
			

			fetch(`https://gabbydesign.herokuapp.com/products/${productId}`)
			.then(res => res.json())
			.then(data => {

				

				setProduct(data.product)
				setProductDescription(data.productDescription)
				setCategory(data.category)
				setPriceProduct(data.priceProduct)
				setPictures(data.pictures)

				
			})
		}, [productId])


		




		return(

			<div className="productview-container">
				<div className="productview-image">
				<img src={pictures} alt="this image"/>

				</div>
				<div className="productview-info">

					<h1>{product}</h1>
					<h2>₱ {priceProduct}</h2>
					<h3>{category}</h3>
					<h3>Description</h3>
					<p>{productDescription}</p>
					<div className="productview-info-btn">
					
					{	user.id === null 
					?   <Navigate to="/Login"/>
					:  <button onClick={()=> 


						addCart(productId)}>Add to my Cart</button>
					}
					 

					 
					
					
					</div>
				</div>
			</div>

			)
}