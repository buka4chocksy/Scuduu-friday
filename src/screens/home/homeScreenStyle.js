import {Platform, StatusBar, StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: Platform.OS = "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center'
  },
  mainView: {
    width: '75%',
    backgroundColor: 'white',
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 5,
  },
  subView: {
    width: '75%',
    backgroundColor: '#F5F5F5',
  },
  sideViewWrapper: {
    marginTop: 20,
    paddingLeft: 45,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  flexEnd: {
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
    textAlign: 'center',
  },
  notifStyle: {
    marginTop: 8,
  },
  subTitle: {
    marginTop: 20,
  },
  greetingText: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
  },
  nameStyle: {
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 44,
  },
  kitchenStyle: {
    marginTop: 30,
    marginBottom: 20,
  },
  greyStyle: {
    position: 'absolute',
    zIndex: 500,
  },
  activeWrapper: {
    position: 'absolute',
    top: 260,
    zIndex: 600,
    left: 20,
    flexDirection: 'row',
  },
  activeText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
    marginLeft: 7,
  },
  tempStyle: {
    backgroundColor: '#FB7B05',
    width: 110,
    height: 110,
    padding: 15,
    borderRadius: 18,
    marginRight: 23,
  },
  tempStyle2: {
    backgroundColor: '#E7E7E7',
    width: 110,
    height: 110,
    padding: 15,
    borderRadius: 18,
    marginRight: 23,
  },
  iconStyle: {
    alignSelf: 'flex-end',
  },
  ActiveTextColor: {
    color: 'white',
    fontSize: 36,
    lineHeight: 41,
  },
  ActiveDefaultTextColor: {
    color: 'black',
    fontSize: 36,
    lineHeight: 41,
  },
  ActiveSubTextColor: {
    color: 'white',
    fontSize: 23,
    lineHeight: 41,
    marginTop: 4,
  },
  ActiveDefaultSubTextColor: {
    color: 'black',
    fontSize: 23,
    lineHeight: 41,
    marginTop: 4,
  },
  ActiveSubTextColor2: {
    color: 'white',
    fontSize: 12,
    lineHeight: 41,
    marginTop: -4,
    marginLeft: 4,
  },
  buttomTabText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
  },
  defaultbuttomTabText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
  },
  defaultTop: {
    marginTop: 20,
  },
  SideIconTabWrapper: {
    marginLeft: 30,
    marginTop: 70,
  },
  sideIcon: {
    height: 60,
    width: 60,
    backgroundColor: '#E7E7E7',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  activeStyleIcon: {
    height: 60,
    width: 60,
    backgroundColor: '#FB7B05',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  sideIcon2: {
    height: 60,
    width: 60,
    backgroundColor: '#FB7B05',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttomButton: {
    height: 60,
    width: 60,
    backgroundColor: '#12B293',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 100,
  },
});
