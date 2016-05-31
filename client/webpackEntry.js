import React from 'react'
import { render } from 'react-dom'
import configureStore from './redux/store.js';
import { Provider } from 'react-redux';

import App from './components/App.jsx'
import './components/Gmap.jsx';

let initialState = {
	users: {
		55: {
			name: 'leo'
		},
		37: {
			name: 'james'
		}
	}
};

let store = configureStore(initialState);

// start it up by loading the App component on the dom
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);