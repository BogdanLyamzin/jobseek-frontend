import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter';
// import kostya from './pages/kostya';

import './App.css';
import store from './store';
import page from './pages/kostya/page';
import AdminPage from './pages/admin/src';
import HrPage from './pages/hr';
// import AddVacancy from './components/Vacancy/AddVacancy';
//import Main from "./pages/main"
import Comments from './pages/comments/Comments';
const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<BrowserRouter>
					<nav>
						<Link to="/admin">HR</Link>
						<Link to="/nelya">Admin</Link>
						<Link to="/kostya">Company</Link>
						<Link to="/zmen">Comments</Link>
					</nav>
					<Switch>
						<Route path="/admin/" component={HrPage} />
						<Route path="/zmen" component={Comments} />
						<Route path="/kostya" component={page} />
					  <PrivateRouter exact path="/nelya" component={AdminPage} />
						{/*<Route path="/kostya" component={kostya} />*/}
						{/*<Route path="/pasha/" component={HrPage}/>*/}
						{/*<Route path="/pasha/vacancyAdd" component={AddVacancy} />*/}
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;

// <Route exact path="/" component = {Test} />
// <Route path="/allHR" component={AllHR} />
// <Route path="/hr/vacancy" component={VacancyHR} />
// <Route path="/vacancyAdd" component={AddVacancy} />
// <Route path="/oneCandidate" component={OneCandidate} />
// <Route path="/updateVacancy/:id" component={UpdateVacancy} />
// <Route path="/hr" component={HomeHR} />
//<Route exact path ="homepage" component={Main} />
