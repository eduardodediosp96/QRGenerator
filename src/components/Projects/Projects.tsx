// @Components
import ProjectItem from './ProjectItem';


// @Styles
import { ProjectsContainer } from './Projects.styles';

const PROJECTS_LIST = [
  {
    order: 0,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
    technologies: ['React', 'Redux', 'Storybook'],
    url: '',
  },
  {
    order: 1,
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
    technologies: ['React', 'Redux', 'Storybook'],
    url: '',
  },
] as const;

const Projects = () => {
  return (
    <ProjectsContainer>
      {PROJECTS_LIST.map((project) => (
        <ProjectItem key={project.order} {...project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
