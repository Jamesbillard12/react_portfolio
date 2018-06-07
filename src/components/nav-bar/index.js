import './index.scss'
import React from 'react'
import { renderIf } from '../../../lib/util'

const Fragment = React.Fragment

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<ul className="nav-bar">
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
			</ul>
		)
	}
}

export default NavBar
