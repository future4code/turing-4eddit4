import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar } from './styles'

export default function AppBarComponent () {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return(
    <AppBar>
      <button onClick={handleLogout}>LOGOUT</button>
    </AppBar>
  );
}