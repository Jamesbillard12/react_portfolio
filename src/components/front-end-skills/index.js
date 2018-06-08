import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
							I am a Front-End Developer with Full-Stack Tendencies
						</h1>
					</div>
					<div className="front-end-skills__table-container__table">
						<p className="front-end-skills__table-container__table__caption">
							"I love building something out of nothing. Seeing my ideas and
							designs come to life on the web excites me."
						</p>
						<div className="front-end-skills__table-container__table__holder">
							<p className="front-end-skills__table-container__table__holder__right">
								-Me
							</p>
						</div>

						<p className="front-end-skills__table-container__table__title">
							Languages I speak:
						</p>
						<p className="front-end-skills__table-container__table__text">
							English, French, JavaScript, and Node.js.
						</p>
						<p className="front-end-skills__table-container__table__title">
							Markup and Formats I Use:
						</p>
						<p className="front-end-skills__table-container__table__text">
							HTML, CSS, JSON and GeoJSON.
						</p>
						<p className="front-end-skills__table-container__table__title">
							Database Systems I Store In:
						</p>
						<p className="front-end-skills__table-container__table__text">
							PostgreSQL, SQlite, and MongoDB.
						</p>
						<p className="front-end-skills__table-container__table__title">
							Libraries and Frameworks I Have Used:
						</p>
						<p className="front-end-skills__table-container__table__text">
							React, Angular, Ionic, Cordova, NodeJS, jQuery, Mongoose, HTML5,
							CSS3, Sass, Webpack, OAuth, Bootstrap, Git/Github, AWS S3,
							Express, Superagent, test-driven development (Chai, Mocha,
							Selenium), continuous deployment workflow (Travis-ci, Coveralls, &
							Heroku), Dust.js, D3.js, & Handlebars.
						</p>
						<p className="front-end-skills__table-container__table__title">
							Version Control:
						</p>
						<p className="front-end-skills__table-container__table__text">
							Implemented with Git, Github, & NodeJS.
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
