import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<header>
				<section className="title">
					{/* <h1 className="titleName gold-text heading">Front-end Developer</h1> */}
					<img
						className="grillimg shadowfilter"
						src="../../../assets/logo.png"
					/>
					<h4 className="titleName gold-text subheading">
						Based in Seattle, but Made in Canada
					</h4>
				</section>
			</header>
		)
	}
}

export default Header
