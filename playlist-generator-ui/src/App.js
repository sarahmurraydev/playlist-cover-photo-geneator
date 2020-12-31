import { 
  BrowserRouter as Router,  
  Switch, 
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from './LandingScreen/Auth'
import Main from './LandingScreen/Main'
import Header from './LandingScreen/Header'
import Footer from './LandingScreen/Footer'
import spotifyCoverPhoto from './images/spotify-generate-cover-photo.png'
import myCoverPhoto from './images/generated-cover-photo.png'


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
      <Footer/>
    </div>
  )
}

function Home(){
  return (
    <div className="home">
        <p>
          Turn your playlist cover photos from something boring spotify autogenerates like this:
        </p>
        <img src={spotifyCoverPhoto} className="home-page-photo"/>
        <p>Into something more representive of your playlist, like this:</p>
        <img src={myCoverPhoto} className="home-page-photo"/>
        <p>This app will make an N by N matrix of the current artists on your playlist. The app uses unique albums in the playlist and is limited by the spotify API's GET /tracks endpoint so only the first 100 songs will be included in making the photo. For more about the photo generating logic check out the FAQs.</p>
        <h4>Ready to start making cover photos? Authorize to get started:</h4>
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
