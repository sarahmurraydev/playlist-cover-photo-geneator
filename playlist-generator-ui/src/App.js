import camera from './camera.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={camera} className="App-logo" alt="camera-icon" />
        <p>
          Create new mosiac cover photos for your spotify playlists
        </p>
        <a
          className="App-link"
          href="http://localhost:5000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Authorize Your Spotify to Get Started
        </a>
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
