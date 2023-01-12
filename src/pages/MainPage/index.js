import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import githubLogo from '../../assests/images/github.svg';
import { Button, Container, Form, Input, Logo, Title } from './styles';

function MainPage() {
  const [login, setLogin] = useState('');
  return (
    <Container>
      <Logo src={githubLogo} alt="logo github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
