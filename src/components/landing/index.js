import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import { windowSizeCreate } from '../../../action/windowSize-actions'
import Body from '../body'
import debounce from 'debounce'

class Landing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			imgUrl: '../../../assets/black-and-white-dark-pattern-211816.jpeg'
		}
		this.setWindowSize = debounce(this.setWindowSize, 500)
	}
	componentDidMount() {
		this.props.scrollTopCreate({ scrollTop: 1 })
		this.refs.landing.onscroll = () => {
			if (this.refs.landing.scrollTop === 0) {
				this.refs.landing.scrollTop = 0.5
			}
			let obj = { ...this.props.scrolltop }
			obj.scrollTop = this.refs.landing.scrollTop * 2
			this.props.scrollTopCreate(obj)
		}
		window.addEventListener('resize', this.setWindowSize)
	}

	setWindowSize = () => {
		let windowSize = { height: window.innerHeight, width: window.innerWidth }
		this.props.windowSizeCreate(windowSize)
	}

	backgroundImageChange = () => {
		if (
			this.props.scrolltop.scrollTop <
			this.props.scrolltop.aboutOffsetTop * 2
		) {
			this.setState({
				imgUrl: '../../../assets/black-and-white-dark-pattern-211816.jpeg'
			})
		} else if (
			this.props.scrolltop.scrollTop >=
			this.props.scrolltop.aboutOffsetTop * 2
		) {
			this.setState({
				imgUrl: '../../../assets/black-and-white-browsing-business-265152.jpeg'
			})
		}
	}

	handleNav = (to, duration) => {
		if (duration === 0) return
		var difference = to - this.refs.landing.scrollTop
		var perTick = (difference / duration) * 10

		setTimeout(() => {
			this.refs.landing.scrollTop = this.refs.landing.scrollTop + perTick
			this.handleNav(to, duration - 10)
		}, 10)
	}

	render() {
		const opacity =
			Math.min(100 / this.props.scrolltop.scrollTop, 1) === 1.0
				? Math.min(100 / this.props.scrolltop.scrollTop, 1).toFixed(2)
				: Math.min(100 / this.props.scrolltop.scrollTop, 1).toFixed(2) - 0.1
		const opaque = Math.min(this.props.scrolltop.scrollTop / 400, 1)
		return (
			<main
				onScroll={this.backgroundImageChange}
				ref="landing"
				className="landing"
				style={{ backgroundImage: `url(${this.state.imgUrl})` }}
			>
				<AppBarCustom
					handleNav={this.handleNav}
					opaque={opaque}
					title="James Billard"
				/>
				<Body opacity={opacity} setWindowSize={this.setWindowSize} />
			</main>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop,
	windowSize: state.windowSize
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll)),
	windowSizeCreate: windowSize => dispatch(windowSizeCreate(windowSize))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing)
