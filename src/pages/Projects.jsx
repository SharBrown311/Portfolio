
import styled from 'styled-components';

import ProjectCarousel from '../components/ProjectCarousel';
import Footer from '../components/Footer';

const Projects = () => {
 return (
  <div>
    <ProjectsWrapper>
    <ProjectCarousel />
    </ProjectsWrapper>
    <Footer />
    </div>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 90px;
  background-color: #f9f9f9;
`;

