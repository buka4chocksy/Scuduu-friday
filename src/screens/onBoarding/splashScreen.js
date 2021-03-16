import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import logo from '../../assets/whiteLogo.png';
import {AuthContext} from '../../components/context';

const brandColor = '#12B293';

const SplashScreen = () => {
  const {navigate, reset} = useNavigation();

  React.useEffect(() => {
    const getTOken = async () => {
      const value = await AsyncStorage.getItem('userToken');

      if (value) {
        navigate('HomeScreen');
      } else {
        navigate('SignInScreen');
      }
    };

    getTOken();
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
