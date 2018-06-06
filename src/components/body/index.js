import React from 'react'
import { connect } from 'react-redux'
import Header from '../header'

class Body extends React.Component {
	render() {
		return (
			<main className="body">
				<Header />
				<div
					style={{ backgroundColor: 'pink', width: '100%', height: '100%' }}
				/>
			</main>
		)
	}
}

const mapStateToProps = state => {}

const mapDispatchToProps = (dispatch, getState) => {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Body)
