import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import Preloader from './shared/Preloader';
import ReduxToastr from './shared/ReduxToastr';
import AdminRoute from './components/Admin/AdminRoute';

const MainPage = lazy(() => import('./pages/MainPage'));
const AdminPage = lazy(() => import('./pages/admin/src'));

const light = createMuiTheme({
	palette: {
		type: 'light',
		color: '#3D3B69',
		textColor: '#3D3B69',
		backgroundColor: '#ecf1fa',
		paper: '#ffffff',
		font: '"Open Sans", sans-serif',
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
		font: '"Open Sans", sans-serif',
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
				<Suspense fallback={<Preloader />}>
					<Switch>
						<AdminRoute path="/admin" component={AdminPage} />
						<Route path="/" component={MainPage} />
					</Switch>
				</Suspense>
				<ReduxToastr />
			</ThemeProvider>
		</BrowserRouter>
	);
}

const mapStateToProps = state => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);
