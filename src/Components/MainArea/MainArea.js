import React, { useState, useEffect} from 'react'
import './MainArea.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuiv4} from 'uuid'

export default function MainArea() {
	// instanceee le state a vide par defaut
	const [inpInfo, setInpInfo] = useState({
		title: "",
		subtitle: "",
		body: ""
	})

	const [inpModify, setInpModify] = useState({
		title: "",
		subtitle: "",
		body: ""
	})
	const selected = useSelector((state) => state.selectedReducer.selectedNote )
	console.log(selected)
	useEffect(() => {
		setInpModify(selected)
	}, [selected] ) 
	const dispatch = useDispatch()
	const [validation, setValidation] = useState(true)
	// const allInp = useRef([])
	// const addInp = (el) => {
	// 	if (el && !allInp.current.includes(el)) {
	// 		allInp.current.push(el)
	// 	}
	// }
	const handleForme = (e) => {
		e.preventDefault()

		if (selected.toggle) {
			if (selected.title.length  < 1) {
			setValidation(false)
		}
		setValidation(true)
		dispatch({
			type: "UPDATENOTE",
			payload: inpInfo
		})
		dispatch({
			type: "RESETENOTE"
		})
		setInpModify({
			title: "",
			subtitle: "",
			body: ""
		})
		} else if (selected.toggle === false ) {
			if (inpInfo.title.length < 1 ) {
			setValidation(false)
		}
		setValidation(true)
		dispatch({
			type: "ADDNOTE",
			payload: {
				...inpInfo,
				id: uuiv4()

			}
		})
		setInpInfo(({
			title: "",
			subtitle: "",
			body: "" 
		}))
		}

		
	}
	const updateInput = (e) => {
		const actualInp = e.target.getAttribute('id')

		if (selected.toggle) {
			const newObjState = {...inpModify, [actualInp]: e.target.value }
			setInpModify(newObjState)

		} else if (selected.toggle === false){
			const newObjState = {...inpInfo, [actualInp]: e.target.value }
			setInpInfo(newObjState)
		}
		
	}

	return (
		<>
		<Sidebar />
		<div className="container-content">
			<h2>Votre plume</h2>
			<form onSubmit={ handleForme }>
				<label htmlFor="title">Le titre</label>
				<input 
					value = { inpModify.toggle ? inpModify.title : inpInfo.title}
					onChange ={ updateInput }
					// ref={addInp}
					type="text" 
					id="title" />
				{!validation && (<span classNae="info-validation">Veillez renseigner un titre!</span>)}

				<label htmlFor="subtitle">Le sous-titre</label>
				<input
					value = { inpModify.toggle ? inpModify.subtitle : inpInfo.subtitle}
					onChange ={ updateInput } 
					// ref={addInp}
					type="text" 
					id="subtitle" />
				{!validation && (<span classNae="info-validation">Veillez renseigner un sous-titre!</span>)}


				<label htmlFor="txtbody">Votre texte</label>
				<textarea 
					value = { inpModify.toggle ? inpModify.body : inpInfo.body}
					onChange ={ updateInput } 
					// ref={addInp}
					id="body" 
					placeholder="Votre texte..." >

						
				</textarea>
				<button>Enregistrer</button>
			</form>
			
		</div>
		</>
	)
}