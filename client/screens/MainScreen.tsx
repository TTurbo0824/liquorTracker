import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailScreen({navigation}: {navigation: any}) {
  const goDetailScreen = () => {
    navigation.navigate('DETAIL');
  };

  const goLiquorScreen = () => {
    navigation.navigate('LIQUOR');
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>Main Screen</Text>
      <Button onPress={goDetailScreen} title="Go Detail Screen" />
      <Button onPress={goLiquorScreen} title="Go Liquor Screen" />
    </View>
  );
}

export default DetailScreen;
