import React from 'react'
import cartIcon from './shopping-cart.svg'
import './FloatingCart.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FloatingCart() {


	const shoppingCart = useSelector(state => state.cartReducer)
	let totalItem = 0;
	for(const item of shoppingCart.cart){

	  	totalItem += item.quantity;
	}
	return (
		<Link to="/ShoppingCart">
			<div className ="floating-cart">
				<p></p>
				<div className ="img-notif-container">
				<img src= { cartIcon } alt=" Icone cadi" />
				<span className="notif" >{totalItem}</span>
				</div>

			</div>

		</Link>
		
	)
}