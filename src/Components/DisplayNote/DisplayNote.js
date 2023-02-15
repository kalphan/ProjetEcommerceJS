import React from 'react'
import './DisplayNote.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function DisplayNote() {

	// pour avoir le id ':cuisine' par exemple
	const {id} = useParams()
	const {notes} = useSelector(state => state.notesReducer)
	const indexArticle = notes.findIndex(obj => obj.title === id )


	return (
		<>
		<Sidebar />
		<div className="display-txt-zone">
			<h2 className="title-display">
				Votre note: {notes[indexArticle] ? `${notes[indexArticle].title}` : ""}
			</h2>
			<span className="subtitle-display">
				{notes[indexArticle] ? `${notes[indexArticle].subtitle}` : ""}
			</span>
			<p className="txt-display">
				Votre note: {notes[indexArticle] ? `${notes[indexArticle].body}` : ""}
			</p>
			
		</div>
		</>
	)
}