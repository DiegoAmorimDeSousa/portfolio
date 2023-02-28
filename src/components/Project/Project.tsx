import React from 'react';
import { AiOutlineLink, AiFillGithub, AiFillWarning } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import { Container } from './styles';

interface IProject {
  img: any,
  title: string,
  description: string,
  stacks: any[],
  link: string,
  github: any[],
  status: string,
}

const Project = ({img, title, description, stacks, link, github, status}: IProject) => {
  return (
    <Container>
      <img src={img} alt="Project Image" />
      <div className="title-project">
        {title}
        <div 
          className="status" 
          style={
            status === 'in development' ? 
              {color: 'yellow'} : 
            status === 'done' ? 
              {color: 'green'} : 
            {} 
            }
          >
          <div>
            {status === 'in development' && <AiFillWarning />}
            {status === 'done' && <MdDone />}
            {status}
          </div> 
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
        {github.length > 0 && (
          <div className="github-link">
            {github.map((repo) => {
              return (
                <>
                  <AiFillGithub />
                  <a href={repo.link} target="_blank" rel="noreferrer" >
                    {repo.name}
                  </a>
                </>
              )
            })}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Project;