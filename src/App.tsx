import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { QrCodeProvider } from './contexts/QrCode';

import { Sidebar } from './components/Sidebar';
import { Generator } from './components/Generator';
import { NotFound } from './components/NotFound';

export function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Sidebar />


			<div className="flex-grow h-screen bg-gray-800 flex flex-col justify-center items-center">
				<Switch>
					<Route exact path="/" render={() => <QrCodeProvider><Generator /></QrCodeProvider>} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}