import React from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react';
import Newsfeed from './components/newsfeed';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
    </div>
  );
}

export default App;
