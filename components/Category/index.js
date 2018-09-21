import { Title } from 'cot-experience';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  width: 24px;
  height: 24px;
  background: ${props => props.color};
  margin-right: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Category = ({ name, color, ...props }) => (
  <Wrapper>
    <ColorBox color={color}>{name.split('')[0]}</ColorBox>
    <Title>{name}</Title>
  </Wrapper>
);

Category.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

Category.defaultProps = {
  name: 'Category name',
  color: '#27B161',
};

export default Category;
