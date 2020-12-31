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
import Header from './LandingScreen/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path={`/authorized/:token`} component={Main}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

function Home(){
  return (
    <div className="home">
      <img src={camera} className="App-logo" alt="camera-icon" />
        <p>
          Create new mosiac cover photos for your spotify playlists
        </p>
        <Auth/>
      {/* <footer>
        <div>Icons made by 
          <a href="https://www.flaticon.com/free-icon/camera_3617267?related_item_id=3617277&term=camera" 
          title="DinosoftLabs">
            DinosoftLabs
          </a> 
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
      </footer> */}
    </div>
  );
}

export default App;
