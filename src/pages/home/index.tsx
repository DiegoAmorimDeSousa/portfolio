import { Container } from './styles';

import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';

function home() {
  return (
    <Container>
      <Header />
      <Presentation />
    </Container>
  );
}

export default home;