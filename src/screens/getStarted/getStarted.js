import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Style from './getStartedStyle';
import Bugger from '../../assets/bugger.png';
import Bell from '../../assets/bell.png';
import Kitchen from '../../assets/kitchen.png';
import grey from '../../assets/grey.png';
import wifi from '../../assets/wifi.png';
import temp from '../../assets/temp.png';
import humid from '../../assets/humid.png';
import sun from '../../assets/sun.png';
import on from '../../assets/on.png';
import bed from '../../assets/bed.png';
import activeBed from '../../assets/activebed.png';
import activechair from '../../assets/activechair.png';
import activemicro from '../../assets/kitchenactive.png';
import activebathtop from '../../assets/bathtopactive.png';
import activealarm from '../../assets/alarmactive.png';
import chair from '../../assets/chair.png';
import bathtop from '../../assets/bathtop.png';
import alarm from '../../assets/alarm.png';
import micro from '../../assets/micro.png';
import palor from '../../assets/palor.png';
import cross from '../../assets/cross.png';
import ButtomModal from '../../components/buttomModal/buttomModal';
import SwipeModal from '../../components/swipeModal/swipeModal'
const tabArray = [
  {icon: bed, name: 'Room', activeIcon: activeBed, image: Kitchen},
  {icon: chair, name: 'Palour', activeIcon: activechair, image: Kitchen},
  {icon: micro, name: 'Kitchen', activeIcon: activemicro, image: Kitchen},
  {icon: bathtop, name: 'Bathroom', activeIcon: activebathtop, image: Kitchen},
  {icon: alarm, name: 'Alarm', activeIcon: activealarm, image: Kitchen},
];

const GetStarted = ({navigation}) => {
  const [active, setActive] = useState('');
  const [activeImage, setActiveImage] = useState('');
  const [showModal, setshowModal] = useState(false);
  let todays = new Date().getHours();
  return (
    <View style={[Style.Container, Style.rowDirection]}>
      <View style={Style.mainView}>
        <View style={[Style.rowDirection, Style.flexEnd]}>
          <TouchableOpacity onPress={() => navigation.navigate('TaskScreen')}>
            <Image source={Bugger} />
          </TouchableOpacity>
          <Text style={Style.Title}>Sweet home!</Text>
        </View>
        <View style={Style.subTitle}>
          <Text style={Style.greetingText}>
            {todays <= 11
              ? 'Good Morning'
              : todays >= 11
              ? 'Good Afternoon'
              : todays >= 17
              ? 'Good Evening'
              : null}
          </Text>

          <Text style={Style.nameStyle}>Franklin</Text>
        </View>
        <TouchableOpacity style={Style.kitchenStyle}>
          <Image
            source={
              active === 'kitchen'
                ? Kitchen
                : active === 'Palour'
                ? palor
                : Kitchen
            }
          />
          <Image source={grey} style={Style.greyStyle} />
          <View style={Style.activeWrapper}>
            <Image source={wifi} />
            <Text style={Style.activeText}>{active}</Text>
          </View>
        </TouchableOpacity>

        <View style={Style.defaultTop}>
          <View style={[Style.rowDirection, Style.tabWrapper]}>
            <View style={Style.tempStyle}>
              <Image source={temp} style={Style.iconStyle} />
              <View style={Style.rowDirection}>
                <Text style={Style.ActiveTextColor}>27</Text>
                <Text style={Style.ActiveSubTextColor2}>o</Text>
                <Text style={Style.ActiveSubTextColor}>c</Text>
              </View>
              <Text style={Style.buttomTabText}>Temp</Text>
            </View>

            <View style={Style.tempStyle2}>
              <Image source={humid} style={Style.iconStyle} />
              <View style={Style.rowDirection}>
                <Text style={Style.ActiveDefaultTextColor}>53</Text>
                <Text style={Style.ActiveDefaultSubTextColor}>%</Text>
              </View>
              <Text style={Style.defaultbuttomTabText}>Humidity</Text>
            </View>
          </View>
          <View
            style={[Style.rowDirection, Style.tabWrapper, Style.defaultTop]}>
            <View style={Style.tempStyle2}>
              <Image source={sun} style={Style.iconStyle} />
              <View style={Style.rowDirection}>
                <Text style={Style.ActiveDefaultTextColor}>75</Text>
                <Text style={Style.ActiveDefaultSubTextColor}>%</Text>
              </View>
              <Text style={Style.defaultbuttomTabText}>Light</Text>
            </View>
            <View style={Style.tempStyle2}>
              <Image source={on} style={Style.iconStyle} />
              <View style={Style.rowDirection}>
                <Text style={Style.ActiveDefaultTextColor}>10</Text>
              </View>
              <Text style={Style.defaultbuttomTabText}>Devices</Text>
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
              style={
                  active === a.name ? Style.activeStyleIcon : Style.sideIcon
                }
                key={i}>
                <Image source={active === a.name ? a.activeIcon : a.icon} />
              </TouchableOpacity>
            );
          })}
          <View>
            <TouchableOpacity
              onPress={() => setshowModal(!showModal)}
              style={Style.buttomButton}>
              <Image source={cross} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* {showModal && (
        <ButtomModal setActive={setshowModal} activeState={showModal} />
      )} */}
       {showModal && (
      <SwipeModal setActive={setshowModal}/>
      )}
    </View>
  );
};

export default GetStarted;
