import {useState} from 'react';
import DataTracker from './components/DataTracker';
import {AppBar, CssBaseline, Typography, Toolbar} from '@material-ui/core';

function App() {

  const [apiData, setApiData] = useState('');
  const [mpData, setmpData] = useState('');

  return (
    <div className="">
      <CssBaseline />
        <AppBar color='primary' position='relative' gutterBottom>
          <Toolbar>
          <Typography variant='h6'> Covid Tracker</Typography>
          </Toolbar>
        </AppBar>
      <DataTracker apiData={apiData} setApiData={setApiData} mpData={mpData} setmpData={setmpData} />
    </div>
  );
}

export default App;
