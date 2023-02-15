import React from 'react';

import { Container } from './styles';

interface Iitems {
  item: string
}

function Anchor({ item }: Iitems) {
  return (
    <Container>
      {item}
    </Container>
  );
}

export default Anchor;