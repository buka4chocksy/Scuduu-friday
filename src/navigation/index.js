import React, {useEffect, useMemo, useReducer, useState, v} from 'react';
import {AuthContext} from '../components/context';
import {Stack} from './common';
import HomeStack from './homeStack';
import SplashScreen from '../screens/onBoarding/splashScreen';
import onBoardingScreen from '../screens/onBoarding/onBoardingScreen';
import SignInScreen from '../screens/authentication/signInScreen';
import SignUpScreen from '../screens/authentication/signUpScreen';
import OneTimePass from '../screens/authentication/oneTimePass';
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
    email: null,
    userToken: null,
    email: null,
    firstTimeLogin: true,
  };

  console.log('====================================');
  console.log('initial user token: ' + initialLoginState.userToken);
  console.log('====================================');

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
          email: action.email,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'VERIFY':
        return {
          ...prevState,
          email: action.email,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.email,
          // userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signUp: async (createdUser, email) => {
        // setUserToken(null);
        // setIsLoading(false);
        const newEmail = email;
        console.log('====================================');
        console.log('the new email is :');
        console.log('====================================');

        try {
          await AsyncStorage.setItem('email', newEmail);
          console.log('user email inside setItem: ', newEmail);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'REGISTER', email: newEmail});
      },

      verify: async (verifiedUser) => {
        const newUserToken = String(verifiedUser[0].user_token);
        const newEmail = verifiedUser[0].email;
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.setItem('email', email);
          console.log('user email inside setItem: ', email);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'VERIFY', email: newEmail, token: newUserToken});
      },

      signIn: async (foundUser) => {
        // setUserToken('abc');
        // setIsLoading(false);
        const newUserToken = String(foundUser.data.user_details.user_token);
        const newEmail = foundUser.data.user_details.email;
        const newUser = JSON.stringify(foundUser);

        try {
          await AsyncStorage.setItem('userToken', newUserToken);
          await AsyncStorage.setItem('newUser', newUser);
          console.log('user token inside setItem: ', newUserToken);
        } catch (e) {
          console.log(e);
        }

        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', email: newEmail, userToken: newUserToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        console.log(loginState.userToken);
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('newUser');
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
      navigate('HomeScreen');

      // setIsLoading(false);
    };
  }, []);

  return (
    <AuthContext.Provider value={{authContext, loginState}}>
      <Root.Navigator screenOptions={globlaScreenOptions}>
        <Root.Screen name={'SplashScreen'} component={SplashScreen} />
        <Root.Screen name={'OneTimePass'} component={OneTimePass} />
        <Root.Screen name={'HomeScreen'} component={HomeStack} />
        <Root.Screen name={'OnBoardingScreen'} component={onBoardingScreen} />
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
