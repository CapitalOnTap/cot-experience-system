import { Caption, Title } from 'cot-experience';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled('div')`
  background: #fff;
  height: 360px;
  max-width: 100%;
  overflow: hidden;
`;

const ColorBar = styled('div')`
  background: ${props => props.color};
  height: 12px;
  width: 100%;
  margin-bottom: 12px;
`;

const Image = styled('img')`
  display: block;
  max-width: 100%;
  /* height: 100%; */
  object-fit: cover;
`;

const StyledTitle = styled(Title)`
  color: ${props => props.color};
`;

const FigCaption = styled('figcaption')`
  margin-top: 12px;
`;

const Example = ({
  color, description, imageUrl, title,
}) => (
  <figure>
    <ImageContainer>
      <Image src={imageUrl} />
    </ImageContainer>
    <FigCaption>
      <ColorBar color={color} />
      <StyledTitle bold color={color}>
        {title}
      </StyledTitle>
      <Caption text={description}>{description}</Caption>
    </FigCaption>
  </figure>
);

Example.propTypes = {
  color: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

Example.defaultProps = {
  color: '#27B161',
  description: 'Description',
  imageUrl: '',
  title: 'Title',
};

export default Example;
