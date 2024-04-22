import React from 'react';

import { Container } from './styles';

import Project from '../Project/Project';

import Calculator from '../../assets/projects/calculadora.png';
import Code7App from '../../assets/projects/code7app.jpg';
import Discord from '../../assets/projects/discord.png';
import Encurtador from '../../assets/projects/encurtador.png';

const Projects: React.FC = () => {

  const projects = [
    {
      img: Code7App,
      title: 'Code7 APP',
      description: 'With the Code7 app together with RD Station, you will be able to build and publish chatbots in just a few steps, without any programming.',
      stacks: [
        <img className='dev-icon' alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
        <img className='dev-icon' alt="node" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />,
        <img className='dev-icon' alt="mongo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />,
        <img className='dev-icon' alt="redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
      ],
      link: 'https://partners.code7.com/',
      github: [],
      status: 'done'
    },
    {
      img: Calculator,
      title: 'Calculator',
      description: 'This project was developed using the technology ReactJS and Styled-Components as library.',
      stacks: [
        <img className='dev-icon' alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
        <img className='dev-icon' alt="node" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      ],
      link: 'https://diegoamorimdesousa.github.io/calculator/',
      github: [
        {
          name: 'Front',
          link: 'https://github.com/DiegoAmorimDeSousa/calculator',
        },
      ],
      status: 'done'
    },
    {
      img: Discord,
      title: 'Bot Discord',
      description: 'Bot developed for a discord server using the discord.js lib and a message exchange provider.',
      stacks: [
        <img className='dev-icon' alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
        <img className='dev-icon' alt="node" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />,
        <img className='dev-icon' alt="discord" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg" />
      ],
      github: [
        {
          name: 'Api',
          link: 'https://github.com/DiegoAmorimDeSousa/bot-discord-boteria',
        },
      ],
      status: 'done'
    },
    {
      img: Encurtador,
      title: 'Url shortener',
      description: 'Project with the purpose of practicing and using the best library available to be able to shorten urls.',
      stacks: [
        <img className='dev-icon' alt="angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" />
        ,
      ],
      github: [
        {
          name: 'Front',
          link: 'https://github.com/DiegoAmorimDeSousa/url-shortener',
        },
      ],
      link: 'https://url-short-steel.vercel.app/',
      status: 'done'
    },
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
              link={project?.link || ''}
              github={project?.github || []}
              status={project.status}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;