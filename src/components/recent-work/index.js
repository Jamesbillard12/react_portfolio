import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import Button from '@material-ui/core/Button'

class RecentWork extends React.Component {
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
		obj.workOffsetTop = this.refs.recentWork.offsetTop - 64
		this.props.scrollTopCreate(obj)
	}

	render() {
		return (
			<div ref="recentWork" className="recent-work">
				<div className="recent-work__title">
					<i className="material-icons recent-work__title__icon">work</i>
					<h1 className="recent-work__title__text">My Recent Work</h1>
				</div>
				<div className="recent-work__table-container">
					<div
						className="recent-work__table-container__table__work"
						style={{
							backgroundImage: `url('../../../assets/Web-Splash-Screen-with-Logo.png')`
						}}
						onClick={() => {
							window.open('https://app.basemap.com/', '_blank')
						}}
					>
						<p>
							BaseMap is a complete outdoor planning and navigational tool all
							in one. No need for multiple apps on your phone.
						</p>
						<p>Click to Visit the Web App</p>
					</div>
					<div
						className="recent-work__table-container__table__work"
						style={{
							backgroundImage: `url('../../../assets/PAVEXpress-LCCA-logo.png')`
						}}
						onClick={() =>
							window.open('http://www.pavexpressdesign.com/', '_blank')
						}
					>
						<p className="recent-work__table-container__table__title">
							The PAVEXpress Scoping Tool is a simplified pavement design tool
							to help engineers and pavement decision-makers analyze pavement
							structures and create technically sound structural designs.
						</p>
						<p>Click to Visit the Website</p>
					</div>
					<div
						className="recent-work__table-container__table__work"
						style={{
							backgroundImage: `url('../../../assets/noimage_thumbnail.png')`
						}}
					>
						<p className="recent-work__table-container__table__title">
							Sample Log is a multi-platform application (mac, iOS, Android, and
							Windows) used to track construction samples from worksites to
							laboratories.
						</p>
						<p>* Currently not Released *</p>
					</div>
				</div>
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
)(RecentWork)
