import React, {useEffect, useMemo, useReducer, useState, v} from 'react';
import {AuthContext} from '../components/context';
import {Stack} from './common';
import HomeStack from './homeStack';
import SplashScreen from '../screens/onBoarding/splashScreen';
import onBoardingScreen from '../screens/onBoarding/onBoardingScreen';
import SignInScreen from '../screens/authentication/signInScreen';
import SignUpScreen from '../screens/authentication/signUpScreen';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation, useNavigationBuilder} from '@react-navigation/core';

const Root = Stack;


function MainNavigator() {

  const globlaScreenOptions = {
    headerShown: false,
  };

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    firstTimeLogin: true,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  if (loginState.userToken) {
    console.log('token exist');
  } else {
    console.log("token doesn't");
  }
  const authContext = useMemo(
    () => ({
      reOpen: async () => {
        try {
          const token = await AsyncStorage.getItem('userToken');
          return token;
        } catch (e) {
          console.log(e);
        }
        return null;
      },
      signUp: () => {
        setUserToken(null);
        setIsLoading(false);
      },

      signIn: async (foundUser) => {
        // setUserToken('abc');
        // setIsLoading(false);
        userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
          console.log('user token inside setItem: ', userToken);
        } catch (e) {
          console.log(e);
        }

        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        console.log('sssss', loginState.userToken);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        // console.log('user token inside get: ', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token outside get: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
      navigate('HomeScreen')

      // setIsLoading(false);
    };
  }, []);

  return (
    <AuthContext.Provider value={{authContext, loginState}}>
      <Root.Navigator screenOptions={globlaScreenOptions}>
        <Root.Screen name={'SplashScreen'} component={SplashScreen} />
        <Root.Screen name={'HomeScreen'} component={HomeStack} />

        {console.log('heyyyyy', loginState.userToken)}
        {console.log('hey', loginState.userToken)}
        <Root.Screen name={'OnBoardingScreen'} component={onBoardingScreen} />

        {console.log('heyyyyy', loginState.userToken)}
        {console.log('hey', loginState.userToken)}

        <Root.Screen name={'SignInScreen'} component={SignInScreen} />
        <Root.Screen name={'SignUpScreen'} component={SignUpScreen} />
      </Root.Navigator>
    </AuthContext.Provider>
  );
}

export default MainNavigator;

// return (
//   <>
//     <AuthContext.Provider value={authContext}>
//       <Root.Navigator screenOptions={globlaScreenOptions}>
//         {loginState.userToken === null ? (
//           <>
//             <Root.Screen
//               name={'SplashScreen'}
//               component={SplashScreen}
//             />
//             <Root.Screen name={'HomeScreen'} component={HomeStack} />
//             {console.log('heyyyyy', loginState.userToken)}
//           </>
//         ) : (
//           <>
//             {console.log('hey', loginState.userToken)}
//             <Root.Screen
//               name={'OnBoardingScreen'}
//               component={onBoardingScreen}
//             />

//             <Root.Screen name={'SignInScreen'} component={SignInScreen} />
//             <Root.Screen name={'SignUpScreen'} component={SignUpScreen} />
//           </>
//         )}
//       </Root.Navigator>
//     </AuthContext.Provider>
//   </>
// );
