import React from 'react';
import { Avatar, Container, Header, Login, Name, Inner, Data } from './styles';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/103126863?v=4" />
        <Login>marcusvinicius</Login>
        <Name>Vinicius</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp; <i>seguidores</i> &nbsp;&middot; 10&nbsp; <i> seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} /> Dev Samurai
        </Data>
        <Data>
          <MdLocationCity size={20} /> Rio de janeiro
        </Data>
        <Data>
          <MdLink size={20} />{' '}
          <a href="https://devsamurai.com.br">devsamurai.com.br</a>
        </Data>
      </Inner>
    </Container>
  );
};

export default Profile;
