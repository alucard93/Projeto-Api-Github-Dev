/* eslint-disable react/no-typos */
import React from 'react';
import { Avatar, Container, Header, Login, Name, Inner, Data } from './styles';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following}&nbsp; <i>seguidores</i> &nbsp;&middot;{' '}
          {user.followers}&nbsp; <i> seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} /> {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} /> <a href={`\\${user.blog}`}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
};

Profile.PropTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
