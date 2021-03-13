import React from 'react';
import Logo from '../../assets/logo.js';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../../components/context';
import Button from '../../components/button';
import Users from '../../../model/users';
import {useNavigation} from '@react-navigation/core';

const SignInScreen = ({navigation}) => {
  const {navigate} = useNavigation();

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  const {authContext, loginState} = React.useContext(AuthContext);
  const {signIn} = authContext;
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleSignIn = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    if (foundUser) {
      signIn(foundUser);
      navigate('HomeScreen');
    } else {
      console.log('Thief');
    }
    console.log('ssssss', foundUser);
  };

  // const handleLogin = (username, password) => {
  //   signIn(username, password);
  // };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Logo />
        {/* <Image source={logo} /> */}
        <Text style={styles.text_header}>Sign in to continue</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>User ID</Text>
          {/* <FontAwesome  name='user-o' color='red' size={30} /> */}
          <View style={styles.action}>
            <Feather name="user" color={'rgba(17, 17, 17, 0.25)'} size={20} />
            <TextInput
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 0.25)',
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                {/* <FontAwesome style={{fontFamily: 'FontAwesome', fontSize: 20, color: 'green'}}>{Icons.exclamationTriangle}</FontAwesome> */}
                <Feather name="check-circle" color="#12B293" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <View style={styles.input_footer}>
          <Text
            style={[
              styles.text_footer,
              // {
              //   // marginTop: 35,
              // },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={'rgba(17, 17, 17, 0.25)'} size={20} />
            <TextInput
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 0.25)',
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  color={'rgba(17, 17, 17, 0.25)'}
                  size={20}
                />
              ) : (
                <Feather
                  name="eye"
                  color={'rgba(17, 17, 17, 0.25)'}
                  size={20}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity style={styles.forgotP}>
          <Text style={{color: '#555555', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <Button
          text="Continue"
          action={() => {
            handleSignIn(data.username, data.password);
          }}
        />
        <View style={styles.alreadyMember}>
          <Text>New User?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{color: '#12B293', marginLeft: 10}}>Register</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    height: '50%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // paddingBottom: 50,
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: 'pink',
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  forgotP: {
    alignItems: 'flex-end',
  },
  text_header: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
    padding: 30,
  },
  socila_header: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    // backgroundColor: 'green'
  },
  text_footer: {
    color: 'rgba(17, 17, 17, 0.25)',
    fontSize: 12,
    fontFamily: 'Montserrat',
    paddingTop: 10,
  },
  input_footer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    // paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyMember: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom:
  },
});
