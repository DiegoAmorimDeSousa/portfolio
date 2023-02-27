import React from 'react';
import { AiOutlineLink, AiFillGithub, AiFillWarning } from 'react-icons/ai';

import { Container } from './styles';

interface IProject {
  img: any,
  title: string,
  description: string,
  stacks: any[],
  link: string,
  github: string[],
  status: string,
}

const Project = ({img, title, description, stacks, link, github, status}: IProject) => {
  return (
    <Container>
      <img src={img} alt="Project Image" />
      <div className="title-project">
        {title}
        <div className="status">
          {status === 'in development' ? (
            <div>
              <AiFillWarning />
              {status}
            </div>
          ) : ''}  
        </div>
      </div>
      <div className="description-project">{description}</div>
      <div className="stacks-project">
        {stacks.map(stack => {
          return (
            stack
          )
        })}
      </div>
      <div className="links">
        <div className="project-link">
          <AiOutlineLink />
          <a href={link} target="_blank" rel="noreferrer">Project</a>
        </div>
        <div className="github-link">
          {github.map((repo, index) => {
            return (
              <>
                <AiFillGithub />
                <a href={repo} target="_blank" rel="noreferrer" >
                  {index === 0 ? 'API' : 'Front'}
                </a>
              </>
            )
          })}
        </div>
      </div>
    </Container>
  );
}

export default Project;