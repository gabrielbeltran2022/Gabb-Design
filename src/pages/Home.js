import {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import ImageCard from '../components/ImageCard'
import Card from '../components/Card'
import Featured from '../components/Featured'
import Footer from './Footer'

export default function Home() {



	const [featured, setFeatured] = useState([])

	useEffect(() => {

		fetch('https://gabbydesign.herokuapp.com/products/all-product')
		.then(res => res.json())
		.then(data => {

			setFeatured(data.map(featured => {
				if(featured.isFeatured === true){
					
					return(

						<Featured key={featured._id} dataProp={featured} />

						)
				
					
				}
			}))


		})

	}, [])





		return(
		<div>
			<div>
				<Banner/>
				<ImageCard/>
				<Card/>
			</div>
		  <div>
				<h1 className="product-header">FEATURED PRODUCT</h1>
					<div className="product-body">
					{featured}
					</div>
			</div>
			 <Footer/>
		</div>


			)

}