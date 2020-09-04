import React , { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login'
import { getTokenFromUrl } from './Components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";

      let _token = hash.access_token;

      if(_token){
        setToken(_token);

        spotify.setAccessToken(_token);
        spotify.getMe().then(user =>{
          console.log('🙍‍♂️' , user);
        })
      }

  }, []); 

  return (
    <div>
      {
        token? (
          <h1>Helloo!</h1>
          // <Player /> 
          // START BUILDING PLAYER COMPONENT
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
