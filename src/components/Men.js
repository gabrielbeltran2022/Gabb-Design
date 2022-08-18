import { Link } from 'react-router-dom'	
import '../styles/featured.css'
import '../styles/product.css'
import '../styles/male.css'



export default function Men({menProp}){




	const {pictures,_id,product} = menProp

	return (

			<>
					<div className="product-card-icon">
							<Link  to={`/product/${_id}`}><img className="product-image"src={pictures} alt=""/></Link>
							<h1>{product}</h1>
						</div>

			</>

		)
}