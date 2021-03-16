import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Bugger from '../assets/bugger.png';

const HandBugger = ({route}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => route.openDrawer()}>
        <Image source={Bugger}  />
      </TouchableOpacity>
    </View>
  );
};
export default HandBugger;
