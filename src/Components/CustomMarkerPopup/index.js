import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default CustomMarkerPopup = ({title, description}) => {
  return (
    <View>
      <View style={{padding: 6}}>
        <Text style={{fontWeight: '700'}}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};
