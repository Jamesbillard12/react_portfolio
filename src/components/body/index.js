import React from 'react'
import { connect } from 'react-redux'
import Header from '../header'
const Fragment = React.Fragment

class Body extends React.Component {
	render() {
		return (
			<Fragment>
				<Header opacity={this.props.opacity} />
				<div
					style={{ backgroundColor: 'white', width: '100%', height: '200%' }}
				/>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {}

const mapDispatchToProps = (dispatch, getState) => {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Body)
