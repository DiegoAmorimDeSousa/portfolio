import { Container } from './styles';

import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import Stacks from '../../components/Stacks/Stacks';

function home() {
  return (
    <Container>
      <Header />
      <Presentation />
      <Stacks />
    </Container>
  );
}

export default home;