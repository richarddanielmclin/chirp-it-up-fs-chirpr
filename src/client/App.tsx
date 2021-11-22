import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Admin from './views/Admin';
import Compose from './views/Compose';
import Details from './views/Details';

const App: React.FC<AppProps> = props => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin/:chirpid" element={<Admin />} />
				<Route path="/details/:chirpid" element={<Details />} />
				<Route path="/compose" element={<Compose />} />
			</Routes>
		</Router>
	);
}

interface AppProps {}

export default App;