import Men from '../components/Men'
import Footer from './Footer'
import {Fragment,useEffect, useState} from 'react'




export default function Male(){



	const [men, setMen] = useState([])

	

	useEffect(() => {

		fetch('https://gabbydesign.herokuapp.com/products/all-product')
		.then(res => res.json())
		.then(data => {

			setMen(data.map(men => {
				if(men.category === "Male"){

					console.log(men)
					
					return(

						<Men key={men._id} menProp={men} />

						)
				
					
				}
			}))


		})

	}, [])


	





	return(

		<>
			 <div>
				<h1 className="product-header">Men Product</h1>
					<div className="product-body">
					{men}
					</div>
					 <Footer/>
			</div>
		</>
	)
}