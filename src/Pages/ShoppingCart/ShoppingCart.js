import React, { useEffect, useState } from 'react'
import './ShoppingCart.css'
import { useSelector, useDispatch} from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'

export default function ShoppingCart() {
	const storeState = useSelector(state => state.cartReducer)
	const dispatch = useDispatch()

	const handleChange = (event, id) => {
		// trouve index
		const indexItem = storeState.cart.findIndex(obj => obj.id === id)
		// change le objet
		const objUpdate = {
			...storeState.cart[indexItem],
			quantity: Number(event.target.value)
		}
		// on envoie a notre reducer
		dispatch({
			type:"UPDATEITEM",
			payload: objUpdate
		})
	}
	// calcul de total
	let totalPrice = 0;
	if (storeState.cart.length !== 0) {
		// pour chak tableau (storeState) 
		for(const item of storeState.cart){
			const itemPrice = item.price * item.quantity;
			totalPrice += itemPrice; 
		}

	}
	return (
		<div className="content-container">
			<p className="heading-cart">Votre panier : </p>
			<ul className="cart-list">
				{storeState.cart.map((item) => (
					<li key={item.id}>
						<img 
						src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
						/>
						<div className="bloc-cart-infos">
							<h4>{item.title}</h4>
							<p>Prix : {item.price} Ar</p>
						</div>
						<div className="bloc-input">
							<label htmlFor="quantityInpût">Quantité</label>
							<input 
								type="number" 
								id="quantityInpût" 
								value={item.quantity}
								onChange={ e => handleChange(e, item.id) } />
						</div>
						
					</li>
					))}
			</ul>
			{/*fixeee a 2 chiffre apres virgule*/}
			<p className="total-price">{`${totalPrice.toFixed(2)}Ar`}</p>
			<button className="btn-cart">Procéder au paiement</button>
		</div>
	)
}