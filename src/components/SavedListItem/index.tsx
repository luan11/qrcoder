import { useContext } from 'react';
import { QrCodeContext } from '../../contexts/QrCode';
import { useHistory } from 'react-router-dom';

import { FiTrash2, FiDownload } from 'react-icons/fi';

import { SavedListItemProps } from './types';
import { Tr, Td, Button } from './styles';

export function SavedListItem({ data }: SavedListItemProps) {
	const {
		updateContent,
		remove
	} = useContext(QrCodeContext);

	const history = useHistory();

	function handleDownload() {
		updateContent(data);

		history.push('/');
	}

	return (
		<Tr>
			<Td className="border-r-2 border-gray-700">
				<code className="bg-gray-700 px-4 py-2 lg:break-normal break-all shadow-lg">{data}</code>
			</Td>
			<Td>
				<Button
					type="button"
					className="hover:text-green-500"
					onClick={handleDownload}
					title="Download"
				>
					<FiDownload />
				</Button>

				<Button
					type="button"
					className="hover:text-red-500"
					onClick={() => remove(data)}
					title="Delete"
				>
					<FiTrash2 />
				</Button>
			</Td>
		</Tr>
	);
}