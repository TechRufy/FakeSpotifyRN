import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Style from './Stili';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from './App';
import ImageBox from './props/ImageBox';
import {logo} from '../images';
import DatePicker from 'react-native-date-picker';
import {Button, RadioButton} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';

import {enGB, registerTranslation} from 'react-native-paper-dates';
registerTranslation('en-GB', enGB);

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Register'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Registration = ({navigation}: Props) => {
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [fullname, setfullname] = useState('');
  const [checked, setChecked] = useState('male');
  const [year, setyear] = useState('');
  const [month, setmonth] = useState('');
  const [day, setday] = useState('');
  const [error, setError] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!password.trim()) {
      return false;
    }
    //Check for the Email TextInput
    if (!email.trim()) {
      return false;
    }

    if (!fullname.trim()) {
      return false;
    }

    if (!checked.trim()) {
      return false;
    }

    if (!month.trim()) {
      return false;
    }
    if (!year.trim()) {
      return false;
    }
    if (!day.trim()) {
      return false;
    }

    return true;
  };

  return (
    <ScrollView style={Style.containerPagina}>
      <ImageBox image={logo} direction="horizontal"></ImageBox>
      <TextInput
        style={Style.Input}
        placeholder="email"
        onChangeText={setemail}></TextInput>
      <TextInput
        style={Style.Input}
        placeholder="full name"
        onChangeText={setfullname}></TextInput>
      <TextInput
        style={Style.Input}
        placeholder="password"
        onChangeText={setpassword}></TextInput>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={Style.testoVerde}>Date of Birth : </Text>
        <TextInput
          style={[Style.InputPiccolo]}
          maxLength={2}
          inputMode="numeric"
          placeholder="DD"
          onChangeText={text => {
            if (controllogiorno(text)) {
              setday(text);
              setError('');
            } else {
              setError('giorno non valido');
            }
          }}></TextInput>
        <TextInput
          style={[Style.InputPiccolo]}
          maxLength={2}
          inputMode="numeric"
          placeholder="MM"
          onChangeText={text => {
            if (controllomese(text)) {
              setmonth(text);
              setError('');
            } else {
              setError('mese non valido');
            }
          }}></TextInput>
        <TextInput
          style={[Style.InputPiccolo]}
          maxLength={4}
          inputMode="numeric"
          placeholder="YY"
          onChangeText={setyear}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
        <RadioButton
          color="#1DB954"
          value="male"
          status={checked === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('male')}></RadioButton>
        <Text style={[Style.testoVerde, {paddingRight: '40%'}]}>Male</Text>
        <RadioButton
          color="#1DB954"
          value="female"
          status={checked === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('female')}></RadioButton>
        <Text style={Style.testoVerde}>Female</Text>
      </View>
      <Pressable
        style={[Style.contenitoreLogin, {marginTop: '10%'}]}
        onPress={async () => {
          setError('');
          if (!checkTextInput()) {
            setError('riempi tutti i campi');
            return;
          }
          var errore = registrazione(
            day,
            month,
            year,
            fullname,
            email,
            password,
            checked,
          );
          setError('');
          var risultato = await errore.then(value => {
            return value;
          });

          if (risultato.error.code == null) {
            navigation.navigate('Authentication');
          } else {
            setError(risultato.error.code);
          }
        }}>
        <Text style={Style.testo}>Sign up</Text>
      </Pressable>
      <Text style={Style.error}>{error}</Text>
    </ScrollView>
  );
};

function controllogiorno(text: string) {
  var giorno = parseInt(text);

  if (giorno > 31 || giorno < 0) {
    return false;
  } else {
    return true;
  }
}

function controllomese(text: string) {
  var mese = parseInt(text);

  if (mese > 12 || mese < 0) {
    return false;
  } else {
    return true;
  }
}

async function registrazione(
  giorno: string,
  mese: string,
  anno: string,
  nome: string,
  email: string,
  password: string,
  genere: string,
) {
  var dataNascita = new Date(
    parseInt(anno),
    parseInt(mese) - 1,
    parseInt(giorno) + 1,
  );
  if (dataNascita.getTime() > Date.now()) {
    return 'data non valida';
  } else if (genere == '') {
    return 'genere non selezionato';
  }

  var risposta = await fetch(
    'https://backendfakespotify.onrender.com/register/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        name: nome,
        birthday: dataNascita,
        gender: genere,
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

  return risposta;
}

export default Registration;
