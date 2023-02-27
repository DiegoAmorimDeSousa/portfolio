import { Container } from './styles';

import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import Stacks from '../../components/Stacks/Stacks';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

function home() {
  return (
    <Container>
      <Header />
      <Presentation />
      <Stacks />
      <Projects />
      <Footer />
    </Container>
  );
}

export default home;