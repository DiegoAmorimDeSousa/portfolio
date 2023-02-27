import React from 'react';

import { Container } from './styles';

const Stacks: React.FC = () => {
  const stacksArray = [
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />,
    <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />,
  ]

  return (
    <Container id="stacks">
      <h1>My Stacks</h1>
      <div className="stacks">
        {stacksArray.sort().map(stack => {
          return (
            stack
          );
        })}
      </div>
    </Container>
  );
}

export default Stacks;