import { Link } from 'react-router-dom';

import { FiPlusCircle, FiStar } from 'react-icons/fi';

import { Container, ListItem, Logo } from './styles';

export function Sidebar() {
  return (
    <Container>
      <nav>
        <Logo>qrcoder</Logo>

        <ul>
          <ListItem>
            <FiPlusCircle />
            <Link to="/">
              Generate a QR Code
            </Link>
          </ListItem>

          <ListItem>
            <FiStar />
            <Link to="/saved">
              Saved QR Codes
            </Link>
          </ListItem>
        </ul>
      </nav>
    </Container>
  );
};
