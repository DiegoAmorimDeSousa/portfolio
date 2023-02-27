import React from 'react';

import { Container } from './styles';

import Project from '../Project/Project';

import Futtylist from '../../assets/projects/futtylist.jpg';
import Calculator from '../../assets/projects/calculadora.png';

const Projects: React.FC = () => {

  const projects = [
    {
      img: Futtylist,
      title: 'FuttyList',
      description: 'This project has the idea of ​​facilitating the creation of a list of people who will participate in the scheduled game of the week and even to keep track of who the "monthly" players are.',
      stacks: [
        <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
        <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />,
        <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      ],
      link: '#',
      github: [
        {
          name: 'API',
          link: 'https://github.com/DiegoAmorimDeSousa/futtylist-api',
        },
      ],
      status: 'in development'
    },
    {
      img: Calculator,
      title: 'Calculator',
      description: 'This project was developed using the technology ReactJS and Styled-Components as library',
      stacks: [
        <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
        <img className='dev-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      ],
      link: '#',
      github: [
        {
          name: 'Front',
          link: 'https://github.com/DiegoAmorimDeSousa/calculator/tree/main/src',
        },
      ],
      status: 'done'
    }
  ];

  return (
    <Container id="projects">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map(project => {
          return (
            <Project 
              img={project.img}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              link={project.link}
              github={project.github}
              status={project.status}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;