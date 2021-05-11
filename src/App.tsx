import { HashRouter as Router } from 'react-router-dom';

import { QrCodeProvider } from './contexts/QrCode';

import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

export function App() {
	return (
		<QrCodeProvider>
			<Router>
				<Sidebar />
				<Content />
			</Router>
		</QrCodeProvider>
	);
}