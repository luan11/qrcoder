import { Link } from 'react-router-dom';

import { FiPlusCircle, FiSave, FiGithub } from 'react-icons/fi';

import { Container, Logo, List, ListItem, LinkText } from './styles';

export function Sidebar() {
  return (
    <Container>
      <Logo>qrcoder</Logo>

      <List>
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

        <ListItem className="mt-auto border-t-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/luan11/qrcoder"
            className="py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl"
          >
            <FiGithub />
            <LinkText>GitHub</LinkText>
          </a>
        </ListItem>
      </List>
    </Container>
  );
};
