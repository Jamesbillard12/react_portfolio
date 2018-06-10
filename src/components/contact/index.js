import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import FontAwesome from 'react-fontawesome'
import ContactIcon from '../contact-icons'

class Contact extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			contactMeArr: [
				{
					name: 'facebook-square',
					url: 'https://www.facebook.com/james.billard?ref=bookmarks',
					type: 'link'
				},
				{
					name: 'linkedin-square',
					url: 'https://www.linkedin.com/in/james-billard-855751132/',
					type: 'link'
				},
				{
					name: 'envelope',
					url: 'jamesbillard12@hotmail.com',
					type: 'email'
				}
			]
		}
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
				{this.state.contactMeArr.map(contact => {
					return (
						<ContactIcon
							name={contact.name}
							url={contact.url}
							type={contact.type}
						/>
					)
				})}
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
