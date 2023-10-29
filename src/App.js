import './App.css';
import {AppBar,Toolbar} from '@material-ui/core';
import Notification from './components/Notification';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import {makeStyles} from '@material-ui/core/styles';

const useStyle=makeStyles((theme)=>({
  wrapper : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
}));

function App() {
  const classes=useStyle();
  return (
    <div className="App">
      <AppBar color='secondary' elevation={2} position="static">
        <Toolbar>
          <div className='head'>
            <h2>Connect</h2>
            <h1>ℤ</h1>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>
        <VideoPlayer />
        <Options>
          <Notification />
        </Options>
      </div>
    </div>
  );
}

export default App;
