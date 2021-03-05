import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Style from './taskStyle';
import Bugger from '../../assets/bugger.png';
import Bell from '../../assets/bell.png';

import bed from '../../assets/bed.png';
import chair from '../../assets/chair.png';
import bathtop from '../../assets/bathtop.png';
import alarm from '../../assets/alarm.png';
import micro from '../../assets/micro.png';
import palor from '../../assets/palor.png';
import cross from '../../assets/cross.png';
import switchLogo from '../../assets/switch.png';
const tabArray = [
  {icon: bed, name: 'room'},
  {icon: chair, name: 'palour'},
  {icon: micro, name: 'kitchen'},
  {icon: bathtop, name: 'bathroom'},
  {icon: alarm, name: 'alarm'},
];

const Task = () => {
  const [active, setActive] = useState('');
  return (
    <View style={[Style.Container, Style.rowDirection]}>
      <View style={Style.mainView}>
        <View style={[Style.rowDirection, Style.flexEnd]}>
          <TouchableOpacity>
            <Image source={Bugger} />
          </TouchableOpacity>
          <Text style={Style.Title}>Sweet home!</Text>
        </View>
        <View style={Style.subTitle}>
          <Text style={Style.greetingText}>Good Afternoon</Text>
          <Text style={Style.nameStyle}>Franklin</Text>
        </View>
    <View style={Style.connectedWrapper}>
    <Text style={Style.greetingText}>Connected Device</Text>
    <View style={[Style.rowDirection , Style.switchSWrappertyle]}>
    <View >
    <Text style={Style.devicetext}>Air Conditioner</Text>
    <Text style={Style.deviceSubtext}>LG AC29010</Text>
    <Text style={Style.deviceSubtext2}>Last Uptime</Text>
    </View>
    <View >
    <TouchableOpacity style={Style.switchStyle}>
            <Image source={switchLogo} />
          </TouchableOpacity>
          <Text style={[Style.deviceSubtext2 , Style.switchText]}>3hrs ago</Text>

</View>
    </View>
    </View>
       
      </View>
      <View style={Style.subView}>
        <View style={Style.sideViewWrapper}>
          <TouchableOpacity style={Style.notifStyle}>
            <Image source={Bell} />
          </TouchableOpacity>
        </View>
        <View style={Style.SideIconTabWrapper}>
          {tabArray.map((a, i) => {
            return (
              <TouchableOpacity
                onPress={() => setActive(a.name)}
                style={Style.sideIcon}
                key={i}>
                <Image source={a.icon} />
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={Style.buttomButton}>
            <Image source={cross} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Task;
