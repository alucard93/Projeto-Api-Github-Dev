import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../../components/Filter';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';
import { getLangsFrom, getUser, getRepos } from '../../services/api';

import { Main, SideBar, Container, Loading } from './styles';


const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </SideBar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
