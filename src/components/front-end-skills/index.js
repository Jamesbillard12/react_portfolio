import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import Body from '../body'

class FrontEndSkills extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="front-end-skills">
				<div className="front-end-skills__table-container">
					<div className="front-end-skills__table-container__title">
						<i className="material-icons front-end-skills__table-container__title__icon">
							code
						</i>
						<h1 className="front-end-skills__table-container__title__text">
							I am a Front-end Developer
						</h1>
					</div>
					<div className="front-end-skills__table-container__table">
						<p className="front-end-skills__table-container__table__caption">
							"I love building something out of nothing. Seeing my ideas and
							designs come to life on the web excites me."
						</p>

						<p className="front-end-skills__table-container__table__title">
							Languages I speak
						</p>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, getState) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FrontEndSkills)
