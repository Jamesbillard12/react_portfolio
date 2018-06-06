import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class AppBarCustom extends React.Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton
						// className={}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="title"
						color="inherit"
						// className={}
					>
						{this.props.title}
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		)
	}
}

// const mapStateToProps = state => {}

// const mapDispatchToProps = (dispatch, getState) => {}

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(AppBarCustom)
export default AppBarCustom
