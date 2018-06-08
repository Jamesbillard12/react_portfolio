import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import Header from '../header'
import AboutMe from '../about-me'
import FrontEndSkills from '../front-end-skills'
const Fragment = React.Fragment

class Body extends React.Component {
	render() {
		return (
			<Fragment>
				<Header opacity={this.props.opacity} />
				<AboutMe />
				<FrontEndSkills />
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, getState) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Body)
