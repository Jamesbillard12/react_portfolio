import './index.scss'
import React from 'react'
import { renderIf } from '../../../lib/util'
import { connect } from 'react-redux'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import FontAwesome from 'react-fontawesome'
const Fragment = React.Fragment

class ContactIcon extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				{renderIf(
					this.props.type == 'link',
					<a target="_blank" href={this.props.url}>
						<FontAwesome
							className="social-icon"
							size="2x"
							name={this.props.name}
						/>
					</a>
				)}
				{renderIf(
					this.props.type == 'email',
					<div onClick={() => window.open(`mailto:${this.props.url}`)}>
						<FontAwesome
							className="social-icon"
							size="2x"
							name={this.props.name}
						/>
					</div>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactIcon)
