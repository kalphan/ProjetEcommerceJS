import React from 'react'
import './ListNotes.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function ListNotes() {

	const {notes} = useSelector(state => state.notesReducer)
	return (
		<>
		<Sidebar />
		<div className="container-content">
			<h2>Voici vos notes</h2>
			<ul className="notes-list-card">
				{notes.map((item) => (
					<Link 
						to={{
							pathname: `/displayNote/${item.title}`
						}} 
					>
						<li>
							<h2>{ item.title }</h2>
							<p>{ item.subtitle }</p>
						</li>
					</Link>
					))}
			</ul>
		</div>
		</>
	)
}