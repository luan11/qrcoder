import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { Generator } from './components/Generator';

export function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Sidebar />

			<Switch>
				<Route exact path="/" component={Generator} />
			</Switch>
		</Router>
	);
}