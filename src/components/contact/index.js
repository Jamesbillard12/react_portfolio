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
			<div
				style={{ minHeight: this.props.windowSize.height }}
				ref="contact"
				className="contact"
			>
				<div className="contact__header">
					<i className="material-icons contact__header__icon">contact_mail</i>
					<h1 className="contact__header__title">
						Interested in working together? We should make coffee plans. Your
						treat . . . ?
					</h1>
				</div>
				<div className="contact__social">
					{this.state.contactMeArr.map(contact => {
						return (
							<div className="contact__social__icon-wrapper">
								<ContactIcon
									name={contact.name}
									url={contact.url}
									type={contact.type}
								/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop,
	windowSize: state.windowSize
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Contact)
