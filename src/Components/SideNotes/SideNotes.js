import React, { useEffect, useState } from 'react'
import './SideNotes.css'
import { useSelector, useDispatch } from 'react-redux'
// dipatch pour transferer data 
import { Link } from 'react-router-dom'
import Note from './Note/Note'

export default function SideNotes() {
	const {notes} = useSelector(state => state.notesReducer)
	// console.log(notes);
	const [notesListe, setNotesListe] = useState(notes)

	// useeffect des que le composant est chargé
	useEffect(() => {
		setNotesListe(notes)

	}, [notes])
	const preventForm = e => e.preventDefault()
	const handleFilter = e => {
		const stateCopy = [...notes];
		const filteredArr = stateCopy.filter((item) => 
			item.title.toLowerCase().includes(e.target.value.toLowerCase()) )
		setNotesListe(filteredArr)
	}
	return (
		<div className="notes-display">
			<h2>Mes notes</h2>
			<form onSubmit= {preventForm} >
					<input onChange={handleFilter} type="text" id="search-notes" placeholder="Rechercher" />
			</form>
			<ul className="notes-list">
				{
					notesListe.map((item) => (
						<Note 
							key={item.id} 
							//id pour trouver et manipuler dans le crud, key pour unique
							id={item.id}
							title={item.title}
							subtitle={item.subtitle}
							body={item.body}
							  />
						) )
				}
				{/*<Note />*/}
			</ul>
		</div>
	)
}