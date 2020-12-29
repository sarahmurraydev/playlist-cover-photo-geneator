import { 
  BrowserRouter as Router,  
  Switch, 
  Route, 
  Link
} from 'react-router-dom'
import camera from './camera.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from './LandingScreen/Auth'
import Main from './LandingScreen/Main'

function App() {
  return (
    <Router>
     <Switch>
       <Route path={`/authorized/:token`} component={Main}/>
       <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}

function Home(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={camera} className="App-logo" alt="camera-icon" />
        <p>
          Create new mosiac cover photos for your spotify playlists
        </p>
        <Auth/>
      </header>
      <footer>
        <div>Icons made by 
          <a href="https://www.flaticon.com/free-icon/camera_3617267?related_item_id=3617277&term=camera" 
          title="DinosoftLabs">
            DinosoftLabs
          </a> 
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
      </footer>
    </div>
  );
}

export default App;
