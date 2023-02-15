import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'
import Navbar from '../../Components/Navbar/Navbar'

export default function Home1() {
	return (
		<>
				
				<div className="content-container">
					<h1 className="home-title">
						Bienvenue au Shop 
						<span> eMpanera</span>
					</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
					 	Harum sunt accusamus voluptate repellendus, pariatur nobis, nulla.
					 	Voluptas repellendus molestias dolorem dolorum assumenda eligendi maiores inventore, 
					 	praesentium eum esse saepe similique?
					</p>
					<img src={ imgHomeShop } alt="" />
					
				</div>
	</>
				
	)
}