// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import { PillContainer, ProjectCard, ProjectTitle } from './Projects.styles';
import { Pill, NavbarLink } from '@styles/Styles';

type ProjectItemProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  url: string;
};

const ProjectItem = ({
  title,
  description,
  technologies,
  url,
}: ProjectItemProps) => {
  return (
    <NavbarLink to={url} target="_blank">
      <ProjectCard>
        <ProjectTitle variant="label">{title}</ProjectTitle>
        <Typography variant="body2" as="p" margin="2 0">
          {description}
        </Typography>
        <PillContainer>
          {technologies.map((technology) => (
            <Pill key={technology}>
              <Typography variant="smallLabel">{technology}</Typography>
            </Pill>
          ))}
        </PillContainer>
      </ProjectCard>
    </NavbarLink>
  );
};

export default ProjectItem;
