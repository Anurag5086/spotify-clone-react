import React , { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login'
import { getTokenFromUrl } from './Components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player'
import { useStateValue } from './StateProvider'

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user} , dispatch] = useStateValue();

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";

      let _token = hash.access_token;

      if(_token){
        setToken(_token);

        spotify.setAccessToken(_token);
        spotify.getMe().then(user =>{

          dispatch({
            type: 'SET_USER',
            user: user
          })
        })
      }

  }, []); 
  console.log('🙍‍♂️' , user);

  return (
    <div>
      {
        token? (
          <Player /> 
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
