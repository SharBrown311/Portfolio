
import styled from 'styled-components';

import ProjectCarousel from '../components/ProjectCarousel';

const Projects = () => {
 return (
    <ProjectsWrapper>
    <ProjectCarousel />
    </ProjectsWrapper>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

