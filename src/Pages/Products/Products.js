import React from 'react'
import heart from './heart.svg'
import './Products.css'
import { Link } from 'react-router-dom'
import inventory from '../../data/inventory.js'
import Navbar from '../../Components/Navbar/Navbar'

export default function Products() {
	return (
		<div className="container-products">
			{ inventory.map(item => (
				<Link
					to={{ 
						pathname: `/Products/${item.title.replace(/\s+/g, "").trim()}`,
					}}	
					key= {item.id} 
					>
					<div className="bloc-card">
						<div className="product-card">
							<div className="visual-aspect">
								<img className="img-product" 
									src={process.env.PUBLIC_URL + `/images/${item.img}.png`} />
								<div className="like-container">
									<img src={heart} />
								</div>
							</div>
							<div className="info">
								<p>{item.title}</p>
								<p>Prix: {item.price} Ar</p>
							</div>
						</div>
						<div className="back-card"></div>
					</div>
				</Link>
				)) 
			}
		</div>

	)
}