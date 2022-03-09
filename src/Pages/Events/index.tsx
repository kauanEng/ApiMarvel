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

const Events: React.FC = () => {
  const [events, setEvents] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/events')
      .then((response) => {
        setEvents(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = events.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });

      setEvents([...events, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [events]);

  return (
    <Container>
      <CardList>
        {events.map((events) => {
          return (
            <Card key={events.id} thumbnail={events.thumbnail}>
              <div id="img" />
              <h2>{events.title}</h2>
              <p>{events.description}</p>
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

export default Events;
