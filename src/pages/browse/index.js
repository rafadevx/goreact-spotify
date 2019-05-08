import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="capa"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa com os melhores rocks</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="capa"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa com os melhores rocks</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="capa"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa com os melhores rocks</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="capa"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa com os melhores rocks</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
