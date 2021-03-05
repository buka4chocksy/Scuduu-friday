import React from 'react';
import {Stack} from './common'
import HomeStack from './homeStack';
import {View, StatusBar, Platform} from 'react-native';
const Root  = Stack;
function MainNavigator() {
  return (
    <>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name={'Home'} component={HomeStack} />
      </Root.Navigator>
    </>
  );
}

export default MainNavigator;
