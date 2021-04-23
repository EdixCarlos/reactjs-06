import React from 'react';
import {Text, Button, Image, ScrollView} from 'react-native';
import {global} from '../styles/global';

const Details = ({navigation, route}) => {
  const goToHome = () => {
    // navigation.goBack()
    navigation.pop();
  };
  return (
    <ScrollView style={global.container}>
      <Text style={global.titulos}>{route.params.name}</Text>
      <Image
        style={global.normalLogo}
        source={{
          uri: route.params.imageUrl,
        }}
      />
      <Text style={global.text}>{route.params.detail}</Text>
      <Button title="Back to Home" onPress={goToHome} />
    </ScrollView>
  );
};

export default Details;
