import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { QrCodeContext } from '../../contexts/QrCode';

import { FiFileText, FiSettings, FiX } from 'react-icons/fi';

import { SavedListItem } from '../SavedListItem';

import { Container, Table, Th, ButtonRemove } from './styles';

export function SavedList() {
  const { saved, removeAll } = useContext(QrCodeContext);

  const history = useHistory();

  function handleRemoveAll() {
    removeAll();

    history.push('/');
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th className="border-r-2"><FiFileText className="inline-block" /></Th>
            <Th><FiSettings className="inline-block" /></Th>
          </tr>
        </thead>
        <tbody>
          {saved.length > 0 && saved.map((item, i) => <SavedListItem key={i} data={item} />)}
        </tbody>
      </Table>

      {saved.length > 0 &&
        <ButtonRemove
          type="button"
          onClick={handleRemoveAll}
        >
          <FiX className="inline-block mr-2" />
          Remove all
        </ButtonRemove>
      }

      {saved.length === 0 && <p className="text-center text-gray-200 mt-4">No saved QR Codes found...</p>}
    </Container>
  );
};
