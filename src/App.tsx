import { HashRouter as Router } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';

export function App() {
	return (
		<Router>
			<Sidebar />
		</Router>
	);
}