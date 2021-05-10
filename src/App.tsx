import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { QrCodeProvider } from './contexts/QrCode';

import { Sidebar } from './components/Sidebar';
import { Generator } from './components/Generator';
import { SavedList } from './components/SavedList';
import { NotFound } from './components/NotFound';

export function App() {
	return (
		<Router basename="/">
			<Sidebar />

			<div className="flex-grow h-screen bg-gray-800 flex flex-col justify-center items-center px-4 overflow-hidden">
				<Switch>
					<Route exact path="/" render={() => <QrCodeProvider><Generator /></QrCodeProvider>} />
					<Route exact path="/saved" render={() => <QrCodeProvider><SavedList /></QrCodeProvider>} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}