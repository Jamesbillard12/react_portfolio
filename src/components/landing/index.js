import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import Header from '../header'

class Landing extends React.Component {
	render() {
		return (
			<main className="landing">
				<AppBarCustom title="James Billard" />
				<Header />
			</main>
		)
	}
}

const mapStateToProps = state => {}

const mapDispatchToProps = (dispatch, getState) => {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing)
