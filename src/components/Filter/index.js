import React from 'react';
import { Container, Selector, Cleaner } from './style';

const Filter = () => {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 1, color: '#3498DB' },
  ];

  const selectors = langs.map((lang) => (
    <Selector key={lang.name.toLowerCase} color={lang.color}>
      <span>{lang.name}</span>
      <span>{lang.count}</span>
    </Selector>
  ));

  return <Container>
            {selectors}
            <Cleaner>Limpar</Cleaner>
          </Container>;
};

export default Filter;
