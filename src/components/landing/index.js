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
		window.onscroll = () => {
			// const newScrollHeight = Math.ceil(window.scrollY / 50) * 30
			// if (this.state.currentScrollHeight != newScrollHeight) {
			this.setState({ currentScrollHeight: window.scrollY * 2 }, () => {
				// console.log(this.state.currentScrollHeight)
			})
		}
		// }
	}
	render() {
		const opacity =
			Math.min(100 / this.state.currentScrollHeight, 1).toFixed(2) - 0.1
		const opaque = Math.min(this.state.currentScrollHeight / 400, 1)
		return (
			<main className="landing">
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
