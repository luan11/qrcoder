import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { QrCodeProvider } from './contexts/QrCode';

import { Sidebar } from './components/Sidebar';
import { Generator } from './components/Generator';
import { SavedList } from './components/SavedList';
import { NotFound } from './components/NotFound';

export function App() {
	const basename = process.env.NODE_ENV === 'production'
		? '/qrcoder'
		: undefined;

	return (
		<Router basename={basename}>
			<Sidebar />

			<div className="flex-grow h-screen bg-gray-800 flex flex-col justify-center items-center px-4 overflow-hidden relative">
				<Switch>
					<Route
						exact
						path="/"
					>
						<QrCodeProvider><Generator /></QrCodeProvider>
					</Route>

					<Route
						exact
						path="/saved"
					>
						<QrCodeProvider><SavedList /></QrCodeProvider>
					</Route>

					<Route
						path="*"
					>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}