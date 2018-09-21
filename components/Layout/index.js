import { SideNav } from 'cot-experience';
import { withRouter } from 'next/router';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import TopNav from '../TopNav';

const defaultTheme = {
  colorPrimary: '#27B161',
  colorDarkGrey: '#A4AAB3',
  colorLightGrey: '#f3f3f3',
  colorShadow: '#000000',
  colorLightBlack: 'rgba(6, 31, 51, 0.7)',
  colorBlack: 'rgba(6, 31, 51, 1)',
  colorPrimaryEmphasis: '#148443',
  colorDanger: '#FF7183',
  colorSuccess: '#27B161',
  breakpoints: [32, 48, 64],
};

const MobileSideNav = styled(SideNav)`
  @media screen and (min-width: 960px) {
    display: none !important;
  }
`;

const DesktopSideNav = styled(SideNav)`
  @media screen and (max-width: 960px) {
    display: none !important;
  }
`;

const ContentContainer = styled.div`
  transition: all 250ms;
  /*sames as width of sidenav*/
  padding: 3rem;
  /* margin-left: 144px; */
  margin: 0 0 0 144px;
  max-width: 1200px;
  @media screen and (min-width: 1344px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 960px) {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 2rem;
  }
`;

class Layout extends Component {
  componentDidMount() {}

  setSidenavRef = (el) => {
    this.sideNavRef = el;
  };

  handleOpenSideNav = () => {
    this.sideNavRef.toggle();
  };

  buildSidenav = (fetched, isPrepaid) => {
    const { router } = this.props;
    const currentPathName = router.pathname;

    const navItems = [
      {
        title: 'Brand',
        pathname: '/brand',
        isSelected: currentPathName === '/brand' ,
        /* you can pass an icon prop */
      },
      {
        title: 'Marketing',
        pathname: '/marketing',
        isSelected: currentPathName === '/marketing',
      },
      {
        title: 'Components',
        pathname: '/components',
        isSelected: currentPathName === '/components',
      },
    ];

    
    return navItems;
  };

  render() {
    const {
      isLoggedIn,
      customerBalance,
      creditLimit,
      children,
      customerType,
      addOnProgram,
      logoutAction,
    } = this.props;

    return (
      <ThemeProvider theme={defaultTheme}>
        <div style={{ position: 'relative' }}>
          <TopNav
            onMenuButtonClicked={this.handleOpenSideNav}
            pageTitle="Dashboard"
            logOutClick={() => logoutAction()}
          />
            <MobileSideNav
              innerRef={this.setSidenavRef}
              logoUrl="/static/images/CoT_logo_portrait.svg"
              navItems={this.buildSidenav(
              customerType !== '',
              customerType === 'Prepaid',
              addOnProgram,
            )}
            />
              <DesktopSideNav
                isOpen
                logoUrl="static/images/CoT_logo_portrait.svg"
                navItems={this.buildSidenav(
              customerType !== '',
              customerType === 'Prepaid',
              addOnProgram,
            )}
              />

                <ContentContainer>
                  {children}
                    <Footer />
                </ContentContainer>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(Layout);
