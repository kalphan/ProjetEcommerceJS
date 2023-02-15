import React, { useRef, useState, useContext } from 'react'
import './AuthForm.css'
import { useSelector ,useDispatch } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'


export default function SignUp() {

	const [error, setError] = useState('');
	const history = useHistory();
	const {signup} = useContext(AuthContext) 

	const showModal = useSelector(state => state.modalsReducer)
	const dispatch = useDispatch()

	async function handleSubmit(e){
		e.preventDefault();
		if (inputs.current[1].value !== inputs.current[2].value) {
			setError("Les mots de passe ne sont pas identiques")
			return;
		}
		await signup(inputs.current[0].value, inputs.current[1].value);
		closeModal()
		history.push("/loggedHome")
		// dispatch({
		// 	type: "CLOSEMODAL"
		// })
		// inputs.current.forEach(inp => {
		// 	inp.value = "";
		// })
		// setError("")
	}
	const closeModal = () => {
		dispatch({

			type : "CLOSEMODAL"
		})

	}
	const toogleSignIn = () => {
		dispatch({

			type : "TOGGLEIN"
		})
	}
	const inputs = useRef([])

	const addInputs = el => {
		if (el && !inputs.current.includes(el)) {
			inputs.current.push(el)
		}
	}

	return (
		<div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
			<div onClick={ closeModal } className="overlay"></div>
			<div className="container-modal">
				<form onSubmit = { handleSubmit } className="form-auth">
					<h2>Inscription</h2>
					<label htmlFor="mail">Votre mail</label>
					<input type="email" ref={ addInputs } htmlFor="mail" required />

					<label htmlFor="psw">Votre mot de passe</label>
					<input type="password" ref={ addInputs } id="psw" required />

					<label htmlFor="psw">Confirmer le mot de passe</label>
					<input type="password" ref={ addInputs } id="confirmpsw" required />
					{ error }
					<button className="btn-sign">S'inscrire</button>


				</form> 
				<button onClick={ closeModal } className="btn-close">X</button>
				<p 
					onClick= { toogleSignIn }
					className="bottom-help-txt">Besoin de se connecter ?</p>
			</div>
		</div>
	)
}