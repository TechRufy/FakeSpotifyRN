import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './HomePage';
import Authentication from './authentication';
import auth, {firebase} from '@react-native-firebase/auth';
import React from 'react';
import Registration from './Register';
import ForgotPassword from './ForgotPassword';

type AppStackParamList = {
  Authentication: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Authentication',
    component: Authentication,
    options: {headerShown: false},
  },
  {
    name: 'Register',
    component: Registration,
    options: {headerShown: false},
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
    options: {headerShown: false},
  },
];

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

  return user ? (
    <Home />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(routeConfig => (
          <Stack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
export type {AppStackParamList};
