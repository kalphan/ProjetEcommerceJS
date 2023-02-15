import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import LogoEdit from './ImgsSidebar/edit.svg'
import FolderIcon from './ImgsSidebar/folder.svg'
import Tools from './ImgsSidebar/settings.svg'
import Menu from './ImgsSidebar/menu.svg'
import './Sidebar.css'
import Navbar from '../../Components/Navbar/Navbar'
import SideNotes from '../SideNotes/SideNotes'

export default function Sidebar() {
	// verifie la longueur d'ecran 
	const [checkWidth, setCheckWidth] = useState(window.innerWidth);

	const checkWidthFunc = () => {
		setCheckWidth(window.innerWidth)
	}
	useEffect (() => {
		// chaque fois lecran change, la function checkWidthFunc est appelee
		// (qui update le state ecran)
		window.addEventListener('resize', checkWidthFunc)
		return () => {
			window.removeEventListener('resize', checkWidthFunc)
		}
	}, [])
	// mode off du bouton menu
	const [toggleNav, setTogglenav] = useState(false)
	// mode on du bouton menu
	const toggleNavFunc = () => {
		setTogglenav(!toggleNav)
	}
	return (
		<>	
		{
			/*chaque fois ecran passe a cette dimension, on active le boutton*/
			checkWidth < 900 && (
				<button 
					onClick={toggleNavFunc}
					className="toggle-nav-btn">
					<img src={Menu} />
				</button>

				)
		}
		
		<nav className={
			// pour affichage avec fonction en click
			toggleNav ? "container-sidebar visible-nav" : "container-sidebar"
		}>
		<div className="sidebar">
			<div className="three-dots">
				<div className="dot-nav d-red"></div>
				<div className="dot-nav d-yellow"></div>
				<div className="dot-nav d-green"></div>

			</div>
			<ul>
				<Link to="/ListNotes">
					<li>
						<img src={FolderIcon} />
					</li>
				</Link>
				<Link to="/edit">
					<li>
						<img src={LogoEdit} />
					</li>
				</Link>
				<Link to="/settings">
					<li>
						<img src={Tools} />
					</li>
				</Link>
			</ul>
		</div>
		<SideNotes />
		</nav>
		</>
	)
}