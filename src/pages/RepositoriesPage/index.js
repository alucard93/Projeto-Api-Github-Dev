import React from 'react';
import Filter from '../../components/Filter';
import Profile from '../../components/Profile';

import { Main, SideBar, Container } from './styles';

const RepositoriesPage = () => {
  return (
    <Container>
      <SideBar>
        <Profile/>
        <Filter/>
      </SideBar>
      <Main>Main</Main>
    </Container>
  );
};

export default RepositoriesPage;
