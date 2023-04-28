import React from 'react';
import {ScrollView, Text} from 'react-native';
import Style from './Stili';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from './App';
type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Register'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Registration = ({navigation}: Props) => {
  return (
    <ScrollView style={Style.containerPagina}>
      <Text>Ciao</Text>
    </ScrollView>
  );
};

export default Registration;
