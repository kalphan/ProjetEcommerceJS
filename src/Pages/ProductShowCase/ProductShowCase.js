import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import './ProductShowcase.css'
import inventory from '../../data/inventory.js'
import {useDispatch} from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'

export default function ProductShowcase() {
	const {id} = useParams();
	const [nbMugs, setNbMugs] = useState(1);
	const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, "").trim() === id)
	// console.log(productClicked);
	const updateMugs = (e) =>  {
		setNbMugs(Number(e.target.value));
	}
	const addingInfo = useRef();
	let timerInfo;
	let display = true;
	const dispatch = useDispatch()	
	const addToCart = e => {
		e.preventDefault()
		const itemAdded = {
			...inventory[productClicked],
			quantity : nbMugs
		}
		dispatch ({
			type: "ADDITEM",
			payload: itemAdded
		})
		addingInfo.current.innerText = "Ajouté au panier"

		if (display) {
			display = false;
			timerInfo = setTimeout(() => {
				addingInfo.current.innerText = "";
				display = true;
			}, 500)

		}

	}
	useEffect(() => {
		return() => {
			clearTimeout(timerInfo);
		}
	}, [])

	return (
		<div className="showcase">
			<div className="container-img-showcase">
				<img 
					className="img-showcase"
					src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
				/>
				
			</div>
			<div className="product-infos">
					<h2>{inventory[productClicked].title}</h2>
					<p>Prix: {inventory[productClicked].price} Ar</p>
					<form onSubmit= { addToCart }>
						<label htmlFor="quantity">Quntité</label>
						<input type="number" id="quantity" value={nbMugs} onChange={ updateMugs} />
						<button>Ajouter au panier </button>
						<span className="adding-info" ref={ addingInfo }></span>
					</form>
				</div>
			
		</div>
	)
}