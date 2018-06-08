import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import Body from '../body'

class Landing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			imgUrl: '../../../assets/black-and-white-dark-pattern-211816.jpg'
		}
	}
	componentDidMount() {
		this.props.scrollTop({ scrollTop: 1 })
		this.refs.landing.onscroll = () => {
			if (this.refs.landing.scrollTop === 0) {
				this.refs.landing.scrollTop = 0.5
			}
			this.props.scrollTop({ scrollTop: this.refs.landing.scrollTop * 2 })
		}
	}

	backgroundImageChange = () => {
		if (this.props.scrolltop.scrollTop < 2000) {
			this.setState({
				imgUrl: '../../../assets/black-and-white-dark-pattern-211816.jpg'
			})
		} else if (this.props.scrolltop.scrollTop > 2000) {
			this.setState({
				imgUrl: '../../../assets/black-and-white-browsing-business-265152.jpg'
			})
		}
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
				<AppBarCustom opaque={opaque} title="James Billard" />
				<Body opacity={opacity} />
			</main>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop
})

const mapDispatchToProps = dispatch => ({
	scrollTop: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing)
