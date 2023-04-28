import {useState, useEffect} from 'react';

import Home from './HomePage';
import Authentication from './authentication';
import auth, {firebase} from '@react-native-firebase/auth';
import React from 'react';

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return user ? <Home /> : <Authentication />;
}

export default App;
