import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import logo from '../../assets/whiteLogo.png';
import {AuthContext} from '../../components/context';

const brandColor = '#12B293';

const SplashScreen = () => {
  const {navigate, reset} = useNavigation();
  const {authContext, loginState} = React.useContext(AuthContext);
  // const {token} = loginState;
  React.useEffect(() => {
    authContext
      .reOpen()
      .then((token) => {
          console.log('from splash', token);
          if(token){
            navigate("HomeScreen")
          }else{
            navigate("SignInScreen")
          }

      })
      .catch();

      // navigate('OnBoardingScreen');


  }, []);
  return (
    <View style={styles.body}>
      <StatusBar hidden={false} backgroundColor={brandColor} />
      <Image source={logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brandColor,
  },
});

// firstTimeLogin ? 'SplashScreen' :
// setTimeout(() => {
//   navigation.reset({
//     index: 0,
//     routes: [{name: token ? 'HomeScreen' : 'SignInScreen'}],
//   });
//   console.log('from splash', token);
// }, 3000);
