import React, { useState } from 'react';
import Filter from '../../components/Filter';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';
import { getLangsFrom } from '../../services/api';

import { Main, SideBar, Container } from './styles';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: 'devSamurai',
    name: 'Dev Samurai',
    avatar_url: 'https://avatars.githubusercontent.com/u/55540536?v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://devsamurai.com.br',
    location: 'São josé dos Campos - SP',
  };

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'Javascript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'Javascript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: null,
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'Typescript',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'Ruby',
    },
  ];

  // const languages = [
  //   { name: 'JavaScript', count: 3, color: '#f1c40f' },
  //   { name: 'Shell', count: 2, color: '#95a5a6' },
  //   { name: 'PHP', count: 1, color: '#3498DB' },
  //   { name: 'Ruby', count: 2, color: '#e74c3c' },
  // ]; linha 79 a 83 substituiu o array fixo

  const languages = getLangsFrom(repositories); //fnção que fornece a prop languages

  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter languages={languages} />
      </SideBar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
