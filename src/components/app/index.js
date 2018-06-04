import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import createAppStore from '../../../lib/store'

const store = createAppStore()

class App extends React.Component {
	// componentDidMount() {
	// 	store.subscribe(() => {
	// 		console.log('*___STATE___*', store.getState())
	// 	})

	// 	store.dispatch({ type: null })
	// }

	render() {
		return (
			<section>
				{/* <Provider store={store}> */}
				<p>hell0</p>
				{/* </Provider> */}
			</section>
		)
	}
}

export default App
