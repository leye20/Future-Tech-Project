import React from 'react';
import { Grid } from 'semantic-ui-react';
import Profile from './components/profile';
import "./components/home.jpg";

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>Profile Page</h1>
      </Grid.Row>
      <Grid.Row>
        {/* Products. */}
        <Profile />
      </Grid.Row>
      <Grid.Row>
        {/* Cart. */}
      </Grid.Row>
    </Grid>
  );
}

export default App;
