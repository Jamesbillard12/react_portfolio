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
	render() {
		const opacity =
			Math.min(100 / this.props.scrolltop.scrollTop, 1) === 1.0
				? Math.min(100 / this.props.scrolltop.scrollTop, 1).toFixed(2)
				: Math.min(100 / this.props.scrolltop.scrollTop, 1).toFixed(2) - 0.1
		const opaque = Math.min(this.props.scrolltop.scrollTop / 400, 1)
		return (
			<main ref="landing" className="landing">
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
