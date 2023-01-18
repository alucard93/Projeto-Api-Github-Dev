import axios from 'axios';
import { langColors } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data, //passei o acumulado // em seguida criamos um objeto que a gente vai concatenar o array atual(valor atual) o que vamos concatenar? Uma chave
        [language]: (data[language] || 0) + 1, //se n encontrar coloca 0 (reatribui a variavel o valor de data no indice languange)
      }),
      [] // inicializamos a variavel data
    ); // resultado: {Javascript: 2, PHP: 1, Ruby: 1, Java: 1, Typescript: 1}

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
};
