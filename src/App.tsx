import { BrowserRouter as Router } from 'react-router-dom';

import { QrCodeProvider } from './contexts/QrCode';

import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

export function App() {
	const basename = process.env.NODE_ENV === 'production'
		? '/qrcoder'
		: undefined;

	return (
		<QrCodeProvider>
			<Router basename={basename}>
				<Sidebar />
				<Content />
			</Router>
		</QrCodeProvider>
	);
}