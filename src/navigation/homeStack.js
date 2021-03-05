import * as React from 'react';
import GetStartedScreen from '../screens/getStarted/getStarted';
import TaskScreen from '../screens/task/task';

import {Stack} from './common';
const Home = Stack;
function HomeStack() {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="GetStartedScreen">
      <Home.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Home.Screen name="TaskScreen" component={TaskScreen} />
    </Home.Navigator>
  );
}

export default HomeStack;
