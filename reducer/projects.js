export default (state = [], action) => {
	let { type, payload } = action
	console.log('PAYLOAD', payload)
	switch (type) {
		case 'PROJECTS_SET':
			return payload
		case 'PROJECTS_CREATE':
			return [payload, ...state]
		case 'PROJECTS_UPDATE':
			return state.map(item => (item._id === payload._id ? payload : item))
		case 'PROJECTS_DELETE':
			return state.filter(item => {
				console.log('ITEM', item)
				return item._id !== payload._id
			})
		case 'LOGOUT':
			return []
		default:
			return state
	}
}
