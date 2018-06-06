import './index.scss'
import React from 'react'
import { renderIf } from '../../../lib/util'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const Fragment = React.Fragment
const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
}

class MenuAppBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentScrollHeight: 0,
			auth: true,
			anchorEl: null
		}
	}

	handleChange = (event, checked) => {
		this.setState({ auth: checked })
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { classes } = this.props
		const { auth, anchorEl } = this.state
		const open = Boolean(anchorEl)
		// console.log(this.props.opaque)
		return (
			<div className={classes.root}>
				<AppBar
					className="app-bar"
					style={{
						backgroundColor: 'transparent',
						zIndex: 10,
						position: 'fixed'
					}}
					position="static"
				>
					<Toolbar
						style={{
							backgroundColor: 'black',
							opacity: this.props.opaque,
							zIndex: 10
						}}
					>
						<Typography variant="title" className={classes.flex}>
							{/* {this.props.title} */}
						</Typography>
					</Toolbar>
					{auth && (
						<Fragment>
							<img
								className={
									this.props.opaque < 0.9
										? 'corner-logo shadowfiltersmall'
										: 'corner-logo shadowfiltersmall show'
								}
								src="../../../assets/logo.png"
							/>

							<div className="icon-button">
								<IconButton
									aria-owns={open ? 'menu-appbar' : null}
									aria-haspopup="true"
									onClick={this.handleMenu}
									style={{
										opacity: 1
									}}
								>
									<AccountCircle
										style={{
											opacity: 1,
											transition: '1s',
											color:
												this.props.opaque < 0.5
													? 'rgba(71, 68, 72, 1)'
													: 'white'
										}}
									/>
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
								</Menu>
							</div>
						</Fragment>
					)}
				</AppBar>
			</div>
		)
	}
}

MenuAppBar.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuAppBar)
