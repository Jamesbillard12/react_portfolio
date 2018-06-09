import './index.scss'
import React from 'react'
import { connect } from 'react-redux'

class RecentWork extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="recent-work">
				<div className="recent-work__title">
					<i className="material-icons recent-work__title__icon">work</i>
					<h1 className="recent-work__title__text">My Recent Work</h1>
				</div>
				<div className="recent-work__table-container">
					<div className="recent-work__table-container__table__basemap">
						<p>PAVEXpress</p>
					</div>
					<div className="recent-work__table-container__table">
						<p className="recent-work__table-container__table__title">
							PAVEXpress
						</p>
					</div>
					<div className="recent-work__table-container__table">
						<p className="recent-work__table-container__table__title">
							Sample Log
						</p>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, getState) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecentWork)
