// let validateScroll = scroll => {
// 	console.log(scroll)
// 	if (!scroll.id || !scroll.scrollTop || !scroll.timestamp) {
// 		throw new Error(
// 			'VALIDATION_ERROR: scroll must include id, scrollTop, and timestamp'
// 		)
// 	}
// }

export default (
	state = { id: 1, scrollTop: 0, timestamp: new Date() },
	action
) => {
	let { type, payload } = action

	switch (type) {
		case 'SCROLLTOP_CREATE':
			return payload
		default:
			return state
	}
}
