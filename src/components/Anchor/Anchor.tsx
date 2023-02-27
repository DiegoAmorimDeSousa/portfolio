import React from 'react';

import { Container } from './styles';

interface Iitems {
  title: string,
  href: string,
}

function Anchor({ title, href }: Iitems) {
  return (
    <Container href={href}>
      {title}
    </Container>
  );
}

export default Anchor;