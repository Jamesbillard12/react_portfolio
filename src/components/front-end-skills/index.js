import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

class FrontEndSkills extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setOffsetTop()
		}, 500)
		window.addEventListener('resize', this.setOffsetTop)
	}

	setOffsetTop = () => {
		let obj = { ...this.props.scrolltop }
		obj.skillsOffsetTop = this.refs.frontEndSkills.offsetTop + 75 - 64
		this.props.scrollTopCreate(obj)
	}

	render() {
		return (
			<div ref="frontEndSkills" className="front-end-skills">
				<div
					style={{ height: this.props.windowSize.height }}
					className="front-end-skills__table-container"
				>
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

const mapStateToProps = state => ({
	scrolltop: state.scrolltop,
	windowSize: state.windowSize
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FrontEndSkills)
