import {Dimensions, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  containerPagina: {backgroundColor: '#191414', flex: 5},
  titolo: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Gotham-Black',
  },
  testo: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Gotham-Black',
  },
  testoVerde: {
    color: '#1DB954',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Gotham-Black',
  },
  Input: {
    margin: 12,
    padding: '2%',
    backgroundColor: '#191919',
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
    alignSelf: 'center',
    elevation: 10,
    paddingHorizontal: '5%',
  },
  contenitoreLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '25%',
    paddingTop: '10%',
  },
  Logo: {
    width: Dimensions.get('screen').width * 0.6,
    height: Dimensions.get('screen').height * 0.2,
    resizeMode: 'center',
  },
  contenitoreLogin: {
    backgroundColor: '#1DB954',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.85,
    alignSelf: 'center',
  },
});

export default Style;
