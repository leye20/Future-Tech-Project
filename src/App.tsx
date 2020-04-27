import React from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react';
import Newsfeed from './components/newsfeed';
import './components/backimage.jpg';
// import './components/5boats.jpg';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <Header as='h3' block>
          <p>Future-Tech Newsfeed</p>
          For your Rssfeed on the go...
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Newsfeed />
      </Grid.Row>
    </Grid>
  );
}

export default App;