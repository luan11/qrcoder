import { Container, Title, P } from './styles';

export function About() {
  return (
    <Container>
      <Title>About</Title>
      <P>Application developed to practice my learning about <b>ReactJS</b> ecosystem. 🤓</P>
      <P>Contact me <a className="text-blue-500 hover:underline" href="mailto:oi@luandev.ml">oi@luandev.ml</a></P>
    </Container>
  );
};
