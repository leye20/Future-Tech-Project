import React from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react';
import Newsfeed from './components/newsfeed';
import './components/backimage.jpg';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <Header as='h3' block>
          <p>Future-Tech-Media Newsfeed</p>
          <em>...your Rssfeed on the go!</em>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Newsfeed />
      </Grid.Row>
    </Grid>
  );
}

export default App;