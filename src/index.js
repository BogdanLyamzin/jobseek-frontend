import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './utils/locales/i18n';
import store from './store';
import { Provider } from 'react-redux';
import onStart from './utils/onStart';

onStart(localStorage);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
