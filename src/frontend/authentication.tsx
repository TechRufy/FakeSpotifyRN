import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {logo} from '../images';
import Home from './HomePage';
import Style from './Stili';
import Registration from './Register';

function Authentication({}) {
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  return (
    <ScrollView style={Style.containerPagina}>
      <View style={Style.contenitoreLogo}>
        <Image style={Style.Logo} source={logo} />
        <View style={{paddingTop: '4%'}}>
          <Text style={Style.titolo}>Spotify</Text>
        </View>
      </View>
      <Text style={Style.titolo}>Login</Text>
      <View style={{paddingTop: '3%'}}>
        <TextInput
          style={Style.Input}
          placeholder="Username"
          onChangeText={setemail}></TextInput>
      </View>
      <TextInput
        style={Style.Input}
        placeholder="password"
        onChangeText={setpassword}></TextInput>
      <Pressable
        onPress={() => {
          console.log('cazzi tuoi');
        }}>
        <Text style={{alignSelf: 'flex-end', paddingRight: '10%'}}>
          Forgot Password ?
        </Text>
      </Pressable>
      <View style={{padding: '10%'}}>
        <Pressable
          style={Style.contenitoreLogin}
          onPress={() => {
            authenticator(email, password);
          }}>
          <Text style={Style.testo}>Sign in</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Don't have an account ? </Text>
          <Pressable
            onPress={() => {
              Registration();
            }}>
            <Text style={Style.testoVerde}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

function authenticator(Username: string, password: string) {
  auth().signInWithEmailAndPassword(Username, password);
}

export default Authentication;
