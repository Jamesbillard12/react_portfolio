import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

class Contact extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setOffsetTop()
		}, 500)
		window.addEventListener('resize', this.setOffsetTop)
	}

	setOffsetTop = () => {
		let obj = { ...this.props.scrolltop }
		obj.contactOffsetTop = this.refs.contact.offsetTop - 64
		this.props.scrollTopCreate(obj)
	}

	render() {
		return (
			<div ref="contact" className="contact">
				<p>Hello</p>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Contact)
