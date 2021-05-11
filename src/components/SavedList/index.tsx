import { useContext } from 'react';
import { QrCodeContext } from '../../contexts/QrCode';

import { FiFileText, FiSettings } from 'react-icons/fi';

import { SavedListItem } from '../SavedListItem';

import { Container, Table, Th } from './styles';

export function SavedList() {
  const { saved } = useContext(QrCodeContext);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th><FiFileText className="mr-2 inline-block" /> Content</Th>
            <Th><FiSettings className="mr-2 inline-block" /> Actions</Th>
          </tr>
        </thead>
        <tbody>
          {saved.length > 0 && saved.map((item, i) => <SavedListItem key={i} data={item} />)}
        </tbody>
      </Table>

      {saved.length === 0 && <p className="text-center text-gray-200 mt-4">No saved QR Codes found...</p>}
    </Container>
  );
};
