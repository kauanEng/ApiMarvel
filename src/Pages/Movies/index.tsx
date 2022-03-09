import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import api from '../../services/api';

import { Container, ButtonMore, Card, CardList } from './styles';

interface ResponseData {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/comics')
      .then((response) => {
        setMovies(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = movies.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });

      setMovies([...movies, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [movies]);

  return (
    <Container>
      <CardList>
        {movies.map((movie) => {
          return (
            <Card key={movie.id} thumbnail={movie.thumbnail}>
              <div id="img" />
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
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

export default Movies;
