import React from 'react';
import {View, Text} from 'react-native';
import {liquorList} from '../database/liquorData';

function LiquorList() {
  return (
    <View>
      {liquorList.map(liquor => (
        <>
          <Text>{liquor.name}</Text>
          <Text>{liquor.type}</Text>
          <Text>{liquor.country}</Text>
        </>
      ))}
    </View>
  );
}

export default LiquorList;
