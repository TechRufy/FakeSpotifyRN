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
    paddingHorizontal: '5%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  InputPiccolo: {
    margin: '2%',
    backgroundColor: '#191919',
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').height * 0.04,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
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
  error: {
    color: 'red',
    alignSelf: 'center',
  },
});

export default Style;
