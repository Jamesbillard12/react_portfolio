import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import Body from '../body'
class Landing extends React.Component {
	render() {
		return (
			<main className="landing">
				<AppBarCustom title="James Billard" />
				<Body />
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
