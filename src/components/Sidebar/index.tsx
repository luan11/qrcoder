import { Link } from 'react-router-dom';

import { FiPlusCircle, FiSave } from 'react-icons/fi';

import { Container, ListItem, Logo } from './styles';

export function Sidebar() {
  return (
    <Container>
      <Logo>qrcoder</Logo>

      <ul>
        <ListItem>
          <FiPlusCircle />
          <Link to="/">
            Generate a QR Code
          </Link>
        </ListItem>

        <ListItem>
          <FiSave />
          <Link to="/saved">
            Saved QR Codes
          </Link>
        </ListItem>
      </ul>
    </Container>
  );
};
