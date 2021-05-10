import { Link } from 'react-router-dom';

import { FiPlusCircle, FiSave } from 'react-icons/fi';

import { Container, Logo, ListItem, LinkText } from './styles';

export function Sidebar() {
  return (
    <Container>
      <Logo>qrcoder</Logo>

      <ul>
        <ListItem>
          <Link
            to="/"
            className="py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl"
          >
            <FiPlusCircle />
            <LinkText>Generate a QR Code</LinkText>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            to="/saved"
            className="py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl"
          >
            <FiSave />
            <LinkText>Saved QR Codes</LinkText>
          </Link>
        </ListItem>
      </ul>
    </Container>
  );
};
