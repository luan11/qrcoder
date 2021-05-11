import { NavLink } from 'react-router-dom';

import { FiPlusCircle, FiSave, FiInfo, FiGithub } from 'react-icons/fi';

import { Container, Logo, List, ListItem, LinkText } from './styles';

export function Sidebar() {
  return (
    <Container>
      <Logo>qrcoder</Logo>

      <List>
        <ListItem>
          <NavLink
            to="/"
            exact
            activeClassName="bg-blue-700"
            className="py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl"
          >
            <FiPlusCircle />
            <LinkText>New</LinkText>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink
            to="/saved"
            exact
            activeClassName="bg-blue-700"
            className="py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl"
          >
            <FiSave />
            <LinkText>Saved</LinkText>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink
            to="/about"
            exact
            activeClassName="bg-blue-700"
            className="py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl"
          >
            <FiInfo />
            <LinkText>About</LinkText>
          </NavLink>
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
