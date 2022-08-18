import Product from '../components/Product'
import ProductView from './ProductView'
import Featured from '../components/Featured'
import Men from '../components/Men'
import Footer from './Footer'

import {Fragment,useEffect, useState} from 'react'

import '../styles/product.css'

export default function ProductRender(){

	
	const [product, setProduct] = useState([])
	const [featured, setFeatured] = useState([])
	const [men, setMen] = useState([])

	useEffect(() => {

		fetch('http://localhost:4000/products/all-product')
		.then(res => res.json())
		.then(data => {
			


				




		








			setFeatured(data.map(featured => {
				if(featured.isFeatured === true){
					
					
					return (
					
						
						<Featured key={featured._id} dataProp={featured} />

					)
				}
			}))


			
			
			setProduct(data.map(product => {
				
			
					
				
				return (
					
						
						<Product key={product._id} productProp={product} />

					)
			}))


		})

	}, [])





	return(
		<>			
				
					<h1 className="product-header">ALL PRODUCT</h1>
					<div className="product-body">
					{product}
					</div>
					 <Footer/>

					
		</>
	)
}