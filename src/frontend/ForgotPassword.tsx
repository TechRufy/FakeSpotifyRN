import React from 'react';
import {ScrollView, Text} from 'react-native';
import Style from './Stili';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from './App';
type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'ForgotPassword'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ForgotPassword = ({navigation}: Props) => {
  return (
    <ScrollView style={Style.containerPagina}>
      <Text>Ciao</Text>
    </ScrollView>
  );
};

export default ForgotPassword;
