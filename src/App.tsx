import React from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react';
import Newsfeed from './components/newsfeed';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <Header as='h3' block>
          Newsfeed Header
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Newsfeed />
      </Grid.Row>
    </Grid>
  );
}

export default App;
