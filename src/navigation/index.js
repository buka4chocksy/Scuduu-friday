import React from 'react';
import {Drawer} from './common';
import HomeStack from './homeStack';
import DrawerStack from './drawStack'
import {View, StatusBar, Platform} from 'react-native';
const Root = Drawer;
function MainNavigator() {
  return (
    <>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name={'drawers'} component={DrawerStack} />
        <Root.Screen name={'Home'} component={HomeStack} />
      </Root.Navigator>
    </>
  );
}

export default MainNavigator;
