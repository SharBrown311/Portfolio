import PropTypes from 'prop-types'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, link }) => {
  return (
    <CardWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton href={link} target="_blank">
          View Project
        </CardButton>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
 
`

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const CardButton = styled.a`
  background-color: #6e45e2;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  &:hover {
    background-color: #553bbf;
  }
`;



Card.propTypes = {
  title: PropTypes.string.title, 
  description: PropTypes.string.description, 
  image: PropTypes.string.image, 
  link: PropTypes.string.link
}