import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import api from '../../services/api';

import { Container, CardList, Card, ButtonMore } from './styles';

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  return (
    <Container>
      <CardList>
        {characters.map((character) => {
          return (
            <Card key={character.id} thumbnail={character.thumbnail}>
              <div id="img" />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </Card>
          );
        })}
      </CardList>
      <ButtonMore onClick={handleMore}>
        Mais
        <div className="container-icon">
          <FiChevronDown />
        </div>
      </ButtonMore>
    </Container>
  );
};

export default Characters;
