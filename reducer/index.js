import { combineReducers } from 'redux'
import scrolltop from './scrolltop'
import windowSize from './window-size'

export default combineReducers({
	scrolltop: scrolltop,
	windowSize: windowSize
})
