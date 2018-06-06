import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<header>
				<section className="title">
					<img
						className="grillimg shadowfilter"
						src="../../../assets/logo.png"
					/>
					<h1 className="titleName gold-text">James Billard</h1>
				</section>
				<nav>
					<ul />
				</nav>
			</header>
		)
	}
}

export default Header
