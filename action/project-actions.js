import superagent from 'superagent'

export const projectsSet = projects => ({
	type: 'PROJECTS_SET',
	payload: projects
})

export const projectsFetchRequest = () => (dispatch, getState) => {
	console.log('THIS HAS BEEN CALLED', API_URL)
	return superagent
		.get(`${API_URL}/api/projects/all`)
		.then(res => {
			console.log('THIS IS THE RES', res.body)
			dispatch(projectsSet(res.body))
			return res.body
		})
		.catch(err => {
			console.log(err)
		})
}
