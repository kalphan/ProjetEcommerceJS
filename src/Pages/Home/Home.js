import React from 'react'
import SignIn from '../../Components/AuthForm/SignIn'
import SignUp from '../../Components/AuthForm/SignUp'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

export default function Home() {
	return (
		<div className="global-container">
			{/*<Navbar/>*/}
			<div className="content-container">
				{/*<br/><br/><br/><br/><br/><br/>
				<h1>Bienvenue sur le site</h1>
				<p>Authentifiez vous pour acceder aux fonctionnalités</p>*/}
				
			</div>
			<SignIn />
			<SignUp />
		</div>
	)
}