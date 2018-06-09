import uuid from 'uuid/v1'

export const scrollTopCreate = scroll => {
	return {
		type: 'SCROLLTOP_CREATE',
		payload: scroll
	}
}
