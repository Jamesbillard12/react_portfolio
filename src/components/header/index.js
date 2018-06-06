import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { renderIf } from '../../../lib/util'
const Fragment = React.Fragment

class Header extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props.opacity)
		return (
			<Fragment>
				{renderIf(
					this.props.opacity > 0,
					<header style={{ opacity: this.props.opacity }} className="header">
						<section className="title">
							<h1 className="titleName gold-text heading">
								Front-end Developer
							</h1>
							<img
								className="grillimg shadowfilter"
								src="../../../assets/logo.png"
							/>
							<h4 className="titleName gold-text subheading">
								Based in Seattle, but Made in Canada
							</h4>
						</section>
					</header>,
					<div />
				)}
			</Fragment>
		)
	}
}

export default Header
