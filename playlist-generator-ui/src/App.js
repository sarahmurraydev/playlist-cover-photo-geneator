import { 
  BrowserRouter as Router,  
  Switch, 
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from './LandingScreen/Auth'
import Main from './LandingScreen/Main'
import Header from './LandingScreen/Header'
import Footer from './LandingScreen/Footer'
import spotifyCoverPhoto from './images/spotify-generate-cover-photo.png'
import myCoverPhoto from './images/generated-cover-photo.png'
import FAQ from './InfoComponents/FAQ'
import Disclaimer from './InfoComponents/Disclaimer'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
            <Route path={`/authorized/:token`} component={Main}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/disclaimer" component={Disclaimer}/>
            <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

function Home(){
  return (
    <div className="home">
        <p>
          Turn your playlist cover photos from something boring spotify autogenerates like this:
        </p>
        <img src={spotifyCoverPhoto} className="home-page-photo" alt="mosiac of 4 album cover photos in 2x2 squares"/>
        <p>Into something more representive of your playlist, like this:</p>
        <img src={myCoverPhoto} className="home-page-photo" alt="mosiac of 81 album cover photos in 9x9 squares"/>
        <p>
          This app will make an N by N matrix of the current artists on your playlist. 
          The app uses unique albums in the playlist and is limited by the spotify API's 
          GET /tracks endpoint so only the first 100 songs will be included in making the photo. 
          For more about the photo generating logic check out the&nbsp;<Link to="/faq" className="app-link inline-link">FAQs</Link>.
        </p>
        <h4>Ready to start making cover photos? Authorize to get started:</h4>
        <Auth/>
    </div>
  );
}

export default App;
