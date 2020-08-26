import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import History from './Components/History';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Main}></Route>
					<Route path='/history' exact component={History}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
