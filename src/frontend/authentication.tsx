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

import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from './App';
import ImageBox from './props/ImageBox';
type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Authentication'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function Authentication({navigation}: Props) {
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');

  return (
    <ScrollView style={Style.containerPagina}>
      <ImageBox image={logo} direction="vertical"></ImageBox>
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
          navigation.navigate('ForgotPassword');
        }}>
        <Text style={{alignSelf: 'flex-end', paddingRight: '10%'}}>
          Forgot Password ?
        </Text>
      </Pressable>
      <View style={{padding: '10%'}}>
        <Pressable
          style={Style.contenitoreLogin}
          onPress={async () => {
            var errore = authenticator(email, password);
            var risultato = await errore.then(value => {
              return value;
            });
            console.log(risultato);

            if (risultato.error == undefined) {
              auth().signInWithCustomToken(risultato.token);
              console.log('ciao');
            } else {
              setError(risultato.error);
            }
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
            onPress={async () => {
              navigation.navigate('Register');
            }}>
            <Text style={Style.testoVerde}>Sign up</Text>
          </Pressable>
          <Text style={Style.error}>{error}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

async function authenticator(Username: string, password: string) {
  var risposta = await fetch('http://techrufy.pythonanywhere.com/Login', {
    method: 'POST',
    body: JSON.stringify({
      email: Username,
      password: password,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(Response => {
      return Response.json();
    })
    .then(json => {
      return json;
    });
  return risposta;
}

export default Authentication;
