import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-svg';

const Button = (props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.signIn}
        onPress={props.action}>
        <View>
          <Text
            style={[
              styles.textSign,
              {
                color: 'white',
              },
            ]}>
           {props.text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#12B293',
    borderRadius: 20,
    width: 192,
    alignSelf: 'center'
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
    color: 'white',
  },
});
