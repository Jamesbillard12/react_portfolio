import uuid from 'uuid/v1'

export const scrollTopCreate = scroll => {
	scroll.id = uuid()
	scroll.timestamp = new Date()
	return {
		type: 'SCROLLTOP_CREATE',
		payload: scroll
	}
}
