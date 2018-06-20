import { combineReducers } from 'redux'
import scrolltop from './scrolltop'
import windowSize from './window-size'
import projects from './projects'

export default combineReducers({
	scrolltop: scrolltop,
	windowSize: windowSize,
	projects: projects
})
