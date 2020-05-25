import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Preloader from 'shared/Preloader';
import ReduxToastr from 'shared/ReduxToastr';
import { LIGHT, DARK } from 'utils/variables/theme';
import AdminRoute from 'components/Admin/AdminRoute';
const MainPage = lazy(() => import('./pages/MainPage'));
const AdminPage = lazy(() => import('./pages/admin/src'));

const App = ({ theme }) => {
	const type = theme === 'light' ? LIGHT : DARK;
	return (
		<BrowserRouter>
			<ThemeProvider theme={type}>
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
};

const mapStateToProps = state => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);
