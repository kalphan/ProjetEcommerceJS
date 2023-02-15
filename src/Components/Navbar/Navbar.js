import React from 'react'
import './Navbar.css'
import { useDispatch } from 'react-redux'

import PrivateHome from '../../Pages/PrivateHome/PrivateHome'
import { Link } from 'react-router-dom'
import PrivateRoute from '../../Components/PrivateRoute'
import Home1 from '../../Pages/Home/Home1'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Products from '../../Pages/Products/Products'
import FloatingCart from '../../Components/FloatingCart/FloatingCart'

import Todo from '../../Pages/Contact/Todo'

export default function Navbar() {

	const dispatch = useDispatch()
	const toggleSignIn = () => {
		dispatch({

			type : "TOGGLEIN"
		})

	}

	const toggleSignUp = () => {
		dispatch({

			type : "TOGGLEUP"
		})

	}
	
	

	return (
		<nav >
		<div className="navbar">
			<button onClick= { toggleSignIn } >Connexion</button>
			<button onClick= { toggleSignUp } >Inscription</button>
		</div>
		<div className="nav-top">
			<Link to="/Home1">eMpanera</Link> 	
			<Link to="/Products">Produits</Link> 	
			<Link to="/Sidebar">CRUD</Link> 
			<Link to="/Todo">ToDo</Link> 		
			<FloatingCart />
		</div>

		</nav>
	)
}