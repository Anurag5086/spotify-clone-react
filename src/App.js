import React , { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getTokenFromUrl } from './Components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player'
import { useStateValue } from './StateProvider'

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token} , dispatch] = useStateValue();

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";

      let _token = hash.access_token;

      if(_token){
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });

        spotify.setAccessToken(_token);
        spotify.getMe().then(user =>{

          dispatch({
            type: 'SET_USER',
            user: user
          });
        })
      }

  }, []); 
  console.log('🙍‍♂️' , user);
  console.log('Lool', token);

  return (
    <div>
      {
        token? (
          <Player spotify={spotify}/> 
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
