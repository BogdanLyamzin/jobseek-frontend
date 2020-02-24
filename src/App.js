import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import MainPage from './components/MainPage';
import ReduxToastr from './shared/ReduxToastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const light = createMuiTheme({
	palette: {
		type: 'light',
		color: '#3D3B69',
		textColor: '#3D3B69',
		backgroundColor: '#F6F9FF',
		paper: '#ffffff',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1980,
		},
	},
});

const dark = createMuiTheme({
	palette: {
		type: 'dark',
		backgroundColor: '#424242',
		textColor: '#c9ced9',
		color: '#26a69a',
		bgLogo: '#22c1c3',
		paper: '#192c55',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1980,
		},
	},
});

function App(props) {
	const theme = props.theme === 'light' ? light : dark;
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MainPage />
				<ReduxToastr />
			</ThemeProvider>
		</BrowserRouter>
	);
}

const mapStateToPtops = state => ({
	theme: state.theme.theme,
});

export default connect(mapStateToPtops)(App);
