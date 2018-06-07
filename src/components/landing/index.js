import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import Body from '../body'

class Landing extends React.Component {
	constructor(props) {
		super(props)

		this.state = { currentScrollHeight: 0 }
	}
	componentDidMount() {
		this.refs.landing.onscroll = () => {
			this.setState({ currentScrollHeight: this.refs.landing.scrollTop * 2 })
		}
	}
	render() {
		const opacity =
			Math.min(100 / this.state.currentScrollHeight, 1) === 1.0
				? Math.min(100 / this.state.currentScrollHeight, 1).toFixed(2)
				: Math.min(100 / this.state.currentScrollHeight, 1).toFixed(2) - 0.1
		const opaque = Math.min(this.state.currentScrollHeight / 400, 1)
		return (
			<main ref="landing" className="landing">
				<AppBarCustom opaque={opaque} title="James Billard" />
				<Body opacity={opacity} />
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
