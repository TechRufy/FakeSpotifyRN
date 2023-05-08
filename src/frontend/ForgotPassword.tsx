import React, {useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import Style from './Stili';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from './App';
import ImageBox from './props/ImageBox';
import {logo} from '../images';
type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'ForgotPassword'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ForgotPassword = ({navigation}: Props) => {
  const [email, setemail] = useState('');
  const [error, setError] = useState('');

  return (
    <ScrollView style={Style.containerPagina}>
      <ImageBox image={logo} direction="horizontal"></ImageBox>
      <Text style={[Style.titolo, {fontSize: 17, paddingHorizontal: 20}]}>
        Enter your Spotify username. We will send an email to reset your
        password{' '}
      </Text>
      <View style={{paddingTop: '3%'}}>
        <TextInput
          style={Style.Input}
          placeholder="Username"
          onChangeText={setemail}></TextInput>
      </View>
      <Pressable
        style={Style.contenitoreLogin}
        onPress={async () => {
          setError('');
          var risposta = await ResetPassword(email);
          setError(risposta.esito);
        }}>
        <Text style={Style.testo}>Reset password</Text>
      </Pressable>
      <Text style={Style.error}>{error}</Text>
    </ScrollView>
  );
};

async function ResetPassword(email: string) {
  var risposta = await fetch(
    'http://techrufy.pythonanywhere.com/ForgotPassword',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(Response => {
      return Response.json();
    })
    .then(json => {
      return json;
    });
  console.log(risposta);
  return risposta;
}

export default ForgotPassword;
