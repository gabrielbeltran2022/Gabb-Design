import { Link } from 'react-router-dom'
import '../styles/featured.css'
import '../styles/product.css'



export default function Featured({dataProp}){



	console.log(dataProp)


const {pictures,_id,product} = dataProp





	return (

			<div className="product-card-icon">
							<Link  to={`/product/${_id}`}><img className="product-image"src={pictures} alt=""/></Link>
							<h1>{product}</h1>
						</div>

		)
}