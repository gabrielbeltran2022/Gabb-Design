import Women from '../components/Women'
import Footer from './Footer'
import {Fragment,useEffect, useState} from 'react'




export default function Female(){



	const [female, setFemale] = useState([])

	

	useEffect(() => {

		fetch('https://gabbydesign.herokuapp.com/products/all-product')
		.then(res => res.json())
		.then(data => {

			setFemale(data.map(female => {
				if(female.category === "Female"){

				
					
					return(

						<Female key={female._id} femaleProp={female} />

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
					{female}
					</div>
					 <Footer/>
			</div>
		</>
	)
}