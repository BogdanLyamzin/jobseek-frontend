import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter';

import store from './store';
import HrPage from './pages/hr';
import CompanyPage from './pages/company';
import AdminPage from './pages/admin/src';
import Comments from './pages/comments/Comments';
const App = () => {
	return (
		<Provider store={store}>
			<div>
				<BrowserRouter>
					<nav>
						<Link to="/hr">HR</Link>
						<Link to="/kostya/hrs">Company</Link>
						<Link to="/nelya">Admin</Link>
						<Link to="/zmen">Comments</Link>
					</nav>
					<Switch>
						<Route path="/hr" component={HrPage} />
						<Route path="/zmen" component={Comments} />
						<Route path="/kostya" component={CompanyPage} />
						<PrivateRouter exact path="/nelya" component={AdminPage} />
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;
