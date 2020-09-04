import React, { useEffect, useState } from 'react';
import logo from '../../assets/netflix-logo.png';

function Navbar(){
	const [show, handleShow] = useState(false)
	
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if(window.scrollY > 100){
				handleShow(true)
			} else {
				handleShow(false)
			}
		});
		return () => {
			window.removeEventListener("scroll");
		}
	}, []);

	return(
		<div className={`navbar ${show && 'navbar__show'}`}>
			<div className="navbar__left">
				<img src={logo} alt="Logo Netflix Clone" title="Netflix Clone" />
				<nav>
					<a href="/">Início</a>
					<a href="/">Séries</a>
					<a href="/">Filmes</a>
					<a href="/">Mais recentes</a>
					<a href="/">Minha lista</a>
				</nav>
			</div>
			<div className="navbar__right">
				<a href="/">Lupa</a>
				<a href="/">Present</a>
				<a href="/">Not</a>
				<a href="/">Avatar</a>
			</div>
		</div>
	)
}

export default Navbar;