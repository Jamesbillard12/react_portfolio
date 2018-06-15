import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

import AppBarCustom from '../app-bar-custom'
import Body from '../body'

class AboutMe extends React.Component {
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
		obj.aboutOffsetTop =
			this.refs.aboutMe.offsetTop + this.refs.aboutMeContent.clientHeight - 64
		this.props.scrollTopCreate(obj)
	}

	render() {
		return (
			<div ref="aboutMe" className="about-me">
				<img
					ref="aboutMeContent"
					src="../../../assets/seattle-skyline-black-silhouette.svg"
				/>
				<div
					style={{ minHeight: this.props.windowSize.height }}
					className="about-me__content"
				>
					<div className="about-me__content__header">
						<i className="material-icons about-me__content__header__icon">
							account_box
						</i>
						<h1 className="about-me__content__header__title">
							Hi, I'm James. Welcome to my portfolio!
						</h1>
					</div>
					<div className="about-me__content__body">
						<p className="about-me__content__body__paragraph">
							I am a passionate and tenacious Web developer. Fast learner,
							offering the ability to assess an organization&#39;s needs and
							create a complementary, robust web presence. Experienced in all
							five stages of the web development process including information
							gathering, planning, design, development, testing and deployment,
							and maintenance. Specialties include JavaScript, React, Angular,
							CSS, HTML, and Node.js.
						</p>
						<div className="about-me__content__body__photo-div">
							<img
								className="about-me__content__body__photo-div__photo"
								src="../../../assets/myAvatar.svg"
							/>
						</div>
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
)(AboutMe)
