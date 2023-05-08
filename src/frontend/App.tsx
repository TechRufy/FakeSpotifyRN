import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './HomePage';
import Authentication from './authentication';
import auth, {firebase} from '@react-native-firebase/auth';
import React from 'react';
import Registration from './Register';
import ForgotPassword from './ForgotPassword';
import {enGB, registerTranslation} from 'react-native-paper-dates';
registerTranslation('en-GB', enGB);

type AppStackParamList = {
  Authentication: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  home: undefined;
};

const StackLogin = createStackNavigator<AppStackParamList>();
const StackAPP = createStackNavigator<AppStackParamList>();

const routesLogin: Array<React.ComponentProps<typeof StackLogin.Screen>> = [
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

const routesAPP: Array<React.ComponentProps<typeof StackAPP.Screen>> = [
  {
    name: 'home',
    component: Home,
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
    <NavigationContainer>
      <StackAPP.Navigator>
        {routesAPP.map(routeConfig => (
          <StackAPP.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </StackAPP.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <StackLogin.Navigator>
        {routesLogin.map(routeConfig => (
          <StackLogin.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </StackLogin.Navigator>
    </NavigationContainer>
  );
}

export default App;
export type {AppStackParamList};
