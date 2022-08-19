import Women from '../components/Women'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import '../styles/featured.css'
import '../styles/product.css'

import {Fragment,useEffect, useState} from 'react'




export default function Female(){



	

	

	const [women, setWomen] = useState([])

	

	useEffect(() => {

		fetch('https://gabbydesign.herokuapp.com/products/all-product')
		.then(res => res.json())
		.then(data => {

			setWomen(data.map(women => {
				if(women.category === "Female"){

					
					
					return(

						<Women key={women._id} womenProp={women} />

						)
				
					
				}
			}))


		})

	}, [])


	





	return(

		<>
			 <div>
				<h1 className="product-header">Female Product</h1>
					<div className="product-body">
					{women}
					</div>
					 <Footer/>
			</div>
		</>
	)
}