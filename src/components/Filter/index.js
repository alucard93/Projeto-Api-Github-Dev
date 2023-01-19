import React from 'react';
import { Container, Selector, Cleaner } from './style';
import PropTypes from 'prop-types';

const Filter = ({ languages, currentLanguage, onClick }) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase}
      color={color}
      className={currentLanguage === name ? ('selected') : ('')}    //lógica cor = card(comparo a info que está no array language com a inf setada no click)
      onClick={() => onClick && onClick(name)}                      //se existir
      >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  );
};

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
