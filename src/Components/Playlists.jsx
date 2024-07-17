import React, { useEffect } from 'react';
import { useStateProvider } from '../Utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../Utils/Constants';
import styled from 'styled-components';

export default function Playlists() {
  const [{ token, playlists = [] }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      if (token) {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        const { items } = response.data;
        const playlists = items.map(({ name, id }) => {
          return { name, id };
        });
        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      }
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;