import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { renderIf } from '../../../lib/util'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

const Fragment = React.Fragment

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<ul className="nav-bar">
				<li
					onClick={() => this.props.handleNav(0.5, 500)}
					className="nav-bar__li"
				>
					<div className="nav-bar__li__nav-link">
						<i className="material-icons">home</i>
						<p>Home</p>
					</div>
				</li>
				<li
					onClick={() =>
						this.props.handleNav(this.props.scrolltop.aboutOffsetTop, 500)
					}
					className="nav-bar__li"
				>
					<div className="nav-bar__li__nav-link">
						<i
							style={{ color: 'rgba(11, 93, 30, 1)' }}
							className="material-icons"
						>
							account_box
						</i>
						<p>About Me</p>
					</div>
				</li>
				<li
					onClick={() =>
						this.props.handleNav(this.props.scrolltop.skillsOffsetTop, 500)
					}
					className="nav-bar__li"
				>
					<div className="nav-bar__li__nav-link">
						<i
							style={{ color: 'rgba(208, 0, 0, 1)' }}
							className="material-icons"
						>
							code
						</i>
						<p>Skills</p>
					</div>
				</li>
				<li
					onClick={() =>
						this.props.handleNav(this.props.scrolltop.workOffsetTop, 500)
					}
					className="nav-bar__li"
				>
					<div className="nav-bar__li__nav-link">
						<i
							style={{ color: 'rgba(250, 169, 22, 1)' }}
							className="material-icons"
						>
							work
						</i>
						<p>Recent Work</p>
					</div>
				</li>
				<li className="nav-bar__li">
					<div className="nav-bar__li__nav-link">
						<i className="material-icons">contact_mail</i>
						<p>Contact Me</p>
					</div>
				</li>
			</ul>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar)
