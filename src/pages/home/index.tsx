import { Container } from './styles';

import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import Stacks from '../../components/Stacks/Stacks';
import Projects from '../../components/Projects/Projects';
import CarouselProjects from '../../components/CarouselProjects/CarouselProjects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function home() {
  return (
    <Container>
      <Header />
      <div className="body">
        <Presentation />
        <Stacks />
        <Projects />
        <CarouselProjects />
        <Contact />
        <Footer />
      </div>
    </Container>
  );
}

export default home;