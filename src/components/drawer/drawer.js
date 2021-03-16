import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './drawerStyle';
import profile from '../../assets/profile.png';
import icon from '../../assets/user.png';
import home from '../../assets/home.png';
import noti from '../../assets/noti.png';
import chain from '../../assets/chain.png';
import theme from '../../assets/theme.png';
import shield from '../../assets/shield.png';
import help from '../../assets/help.png';
import about from '../../assets/about.png';
import water from '../../assets/water.png';
import logoff from '../../assets/logoff.png';
import reboot from '../../assets/reboot.png';
import login from '../../assets/login.png';

const Drawer = ({navigation}) => {
  const textArray = [
    {name: 'Profile', logo: icon, Screenname: 'TaskScreen'},
    {name: 'Home', logo: home},
    {name: 'Notification', logo: noti},
    {name: 'Settings', logo: chain},
    {name: 'Theme', logo: theme},
    {name: 'Privacy Policy', logo: shield},
    {name: 'Help', logo: help},
    {name: 'About us', logo: about},
  ];
  const buttomArray = [
    {name: 'Power Off', logo: logoff},
    {name: 'Reboot', logo: reboot},
    {name: 'Log Out', logo: login},
  ];
  return (
    <View style={Style.Container}>
      <View style={Style.headWrapper}>
        <View style={Style.imageWrapper}>
          <Image source={profile} style={Style.imageStyle} />
          <View style={Style.textWrapper}>
            <Text>Good Afternoon</Text>
            <Text style={Style.nameText}>Franklin</Text>
          </View>
        </View>
      </View>
      <View style={Style.buttonWrapper}>
        {textArray.map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(data.Screenname)}
              key={index}
              style={Style.button}>
              <Image source={data.logo} />
              <Text style={Style.buttonText}>{data.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={Style.buttomButton}>
        <Image source={water} />
        <Text style={Style.watertext}>Get Water Now</Text>
      </TouchableOpacity>
      <View style={Style.borderline} />
      <View style={Style.ButtomWrapper}>
        {buttomArray.map((a, i) => {
          return (
            <TouchableOpacity key={i} style={Style.logButton}>
              <Image source={a.logo} style={Style.logImage} />
              <Text>{a.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default Drawer;
