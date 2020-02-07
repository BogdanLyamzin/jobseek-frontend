import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter';

import './App.css';
import store from './store';
import HrPage from './pages/hr';
import page from './pages/kostya/page';
import AdminPage from './pages/admin/src';
import Comments from './pages/comments/Comments';
const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<BrowserRouter>
					<nav>
						<Link to="/hr">HR</Link>
						<Link to="/nelya">Admin</Link>
						<Link to="/kostya">Company</Link>
						<Link to="/zmen">Comments</Link>
					</nav>
					<Switch>
						<Route path="/hr" component={HrPage} />
						<Route path="/zmen" component={Comments} />
						<Route path="/kostya" component={page} />
						<PrivateRouter exact path="/nelya" component={AdminPage} />
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;
