import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Authentication from './authentication';

function Home() {
  return (
    <ScrollView>
      <Text>Benvenuto nella home</Text>
      <Button
        title="log out"
        onPress={() => {
          auth().signOut();
        }}></Button>
    </ScrollView>
  );
}

export default Home;
