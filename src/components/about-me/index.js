import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import Body from '../body'

class AboutMe extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="about-me">
				<div className="about-me__content">
					<div className="about-me__content__header">
						<h1 className="about-me__contentheader__title">
							Hi, I'm James. Welcome to my World!
						</h1>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {}

const mapDispatchToProps = (dispatch, getState) => {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AboutMe)
