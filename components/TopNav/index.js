import { Icon, MenuDropdown, Paper, Title } from 'cot-experience';
import { Box } from 'grid-styled';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(Paper)`
  background: ${props => props.theme.colorPrimary};
  min-height: 56px;
  position: fixed;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 3rem;
  top: 0;
  z-index: 4;
  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const PageTitle = styled(Title)`
  color: #fff;
`;
const MenuIcon = styled(Icon)`
  cursor: pointer;
  color: #fff;
`;

const TopNav = ({
  user, onMenuButtonClicked, pageTitle, logOutClick, ...props
}) => {
  const { tradingName } = user;
  return (
    <Wrapper {...props}>
      <Box>
        <MenuIcon name="menu" onClick={onMenuButtonClicked} />
      </Box>
      <Box>
        <PageTitle>{pageTitle}</PageTitle>
      </Box>
    </Wrapper>
  );
};

TopNav.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    locatorId: PropTypes.string,
  }),
  onMenuButtonClicked: PropTypes.func.isRequired,
  pageTitle: PropTypes.string,
  logOutClick: PropTypes.func.isRequired,
};

TopNav.defaultProps = {
  user: { firstName: '', lastName: '', locatorId: '' },
  pageTitle: ' Page title',
};

export default TopNav;
