import React from 'react';
import { Grid } from 'semantic-ui-react';
import Profile from './components/profile';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>Let's Try React &amp; Redux... Again!</h1>
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