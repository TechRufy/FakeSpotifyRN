import {Dimensions, Image, ImageSourcePropType, Text, View} from 'react-native';
import Style from '../Stili';
import React from 'react';

const ImageBox = ({image, direction}: any) => {
  if (direction == 'vertical') {
    return (
      <View style={Style.contenitoreLogo}>
        <Image style={Style.Logo} source={image} />
        <View style={{paddingTop: '4%'}}>
          <Text style={Style.titolo}>Spotify</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={[
          Style.contenitoreLogo,
          {flexDirection: 'row', marginBottom: '-20%'},
        ]}>
        <Image
          style={[Style.Logo, {width: Dimensions.get('screen').width * 0.18}]}
          source={image}
        />
        <View style={{paddingTop: '4%', paddingLeft: '5%'}}>
          <Text style={[Style.titolo, {fontSize: 40}]}>Spotify</Text>
        </View>
      </View>
    );
  }
};

export default ImageBox;
