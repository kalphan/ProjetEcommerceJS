import React, { useContext } from 'react'
import SignIn from '../../Components/AuthForm/SignIn'
import SignUp from '../../Components/AuthForm/SignUp'
import Navbar from '../../Components/Navbar/Navbar'
import '../Home/Home.css'
import { AuthContext } from '../../context/AuthContext'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FloatingCart from '../../Components/FloatingCart/FloatingCart'
import Home1 from '../../Pages/Home/Home1'
import Contact from '../../Pages/Contact/Contact'
import ShoppingCart from '../../Pages/ShoppingCart/ShoppingCart'
import Products from '../../Pages/Products/Products'
import ProductShowCase from '../../Pages/ProductShowCase/ProductShowCase'



export default function PrivateHome() {

	const { logout } = useContext(AuthContext)

	return (
		<div className="global-container">
			

			<div className="content-container">
				<h1>Compte privé</h1>
				<p>Amusez vous bien !</p>
				<button onClick={ logout }>Se déconnecter</button>
			</div>
		</div>
	)
}