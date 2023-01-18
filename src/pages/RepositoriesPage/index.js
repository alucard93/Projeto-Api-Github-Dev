import React from 'react';
import Filter from '../../components/Filter';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';

import { Main, SideBar, Container } from './styles';

const RepositoriesPage = () => {
  return (
    <Container>
      <SideBar>
        <Profile />
        <Filter />
      </SideBar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
