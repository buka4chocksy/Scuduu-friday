import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Style from './swipeModalStyle';
import reminderIcon from '../../assets/bar.png';
import notiIcon from '../../assets/bell2.png';
import room from '../../assets/bed.png';
const IconMap = [
  {name: 'task', icon: reminderIcon, title: 'Add a new task'},
  {name: 'reminder', icon: notiIcon, title: 'Add a reminder'},
  {name: 'room', icon: room, title: 'Add a new room'},
];
export default function SwipeModal({setActive}) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View>
      <Modal
        isVisible={isVisible}
        swipeDirection="down"
        //swipeDirection={["up", "down", "left", "right"]}
        onSwipeComplete={(e) => {
          setIsVisible(false);
        }}
        style={{justifyContent: 'flex-end', marginBottom: '50%'}}>
        <View style={{backgroundColor: 'white'}}>
            <View style={Style.topLine}>
            </View>
          <TouchableOpacity
            onPress={() => setIsVisible(setActive)}
            style={Style.Container}>
            <View style={Style.mainWrapper}>
              {IconMap.map((index, i) => {
                return (
                  <View style={Style.iconWrappa} key={i}>
                    <TouchableOpacity style={Style.iconstyle}>
                      <Image source={index.icon} />
                    </TouchableOpacity>
                    <Text style={Style.textStyle}>{index.title}</Text>
                  </View>
                );
              })}
              {/* <TouchableOpacity onPress={()=>setActive(false)}  style={Style.buttomButton}>
            <Image source={close} />
            </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
