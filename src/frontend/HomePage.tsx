import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from './App';
import {FlatList} from 'react-native-gesture-handler';
import Style from './Stili';

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Register'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function Home({navigation}: Props) {
  const [data, setdata] = useState<any[]>([]);
  const [iswaiting, setwaiting] = useState(true);

  const retrieveSong = async () => {
    try {
      var risposta = await fetch(
        'http://techrufy.pythonanywhere.com//ListaSong',
        {
          method: 'GET',
        },
      );
      const json = await risposta.json();
      setdata(json.canzoni);
    } catch (error) {
      console.log(error);
    } finally {
      setwaiting(false);
    }
  };

  useEffect(() => {
    retrieveSong();
  }, []);

  return (
    <View style={Style.containerPagina}>
      <Text>Benvenuto nella home</Text>
      {iswaiting ? (
        <Text>ciao</Text>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => {
              return (
                <View style={{marginHorizontal: 15}}>
                  <Text>{item.Nome}</Text>
                  <Text>{item.Genere}</Text>
                  <Text>{item.Album}</Text>
                  <Text>{item.Artista}</Text>
                </View>
              );
            }}></FlatList>
        </View>
      )}
      <Button
        title="log out"
        onPress={() => {
          auth().signOut();
        }}></Button>
    </View>
  );
}

export default Home;
