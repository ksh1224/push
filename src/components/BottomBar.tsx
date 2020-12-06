import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {activeColor, ESS, REM} from 'utils/stylesUtil';
import Button from './element/Button';

const styles = ESS({
  bottomBar: {
    width: '100%',
    height: 106 * REM,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$backgraoundColor',
    justifyContent: 'space-between',
    paddingHorizontal: 20 * REM,
  },
  bottomBarTopLine: {
    top: -1.5 * REM,
    width: '100%',
    height: 2 * REM,
  },
  flex: {
    flex: 1,
  },
  button: {
    backgroundColor: '$cardColor',
    height: 70 * REM,
    width: 70 * REM,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10 * REM,
    elevation: 3,
  },
  buttonClickImg: {
    position: 'absolute',
    height: 70 * REM,
    width: 70 * REM,
  },
  buttonTop: {
    flex: 1,
    paddingTop: 5 * REM,
    height: 26 * REM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBottom: {
    height: 26 * REM,
    alignItems: 'center',
  },
  buttonImg: {
    resizeMode: 'contain',
    tintColor: '$disableColor',
  },
  workoutImg: {
    height: 18.5 * REM,
    width: 30 * REM,
  },
  missionImg: {
    height: 25 * REM,
    width: 27 * REM,
  },
  userImg: {
    height: 23 * REM,
    width: 20.8 * REM,
  },
  settingImg: {
    height: 22.8 * REM,
    width: 22.8 * REM,
  },
  buttonText: {
    lineHeight: 14 * REM,
    fontFamily: '$fontMedium',
    fontSize: 10 * REM,
    color: '$disableColor',
  },
});

export default function BottomBar({navigation, state}: BottomTabBarProps) {
  return (
    <>
      <LinearGradient
        colors={['rgba(97,98,126,0)', 'rgba(97,98,126,0.2)']}
        style={styles.bottomBarTopLine}
      />
      <View style={styles.bottomBar}>
        {['WorkOut', 'Mission', 'UserInfo', 'Setting'].map(
          (type: string, i) => {
            const isClick = i === state.index;
            let source, imgSize, text;
            switch (type) {
              case 'WorkOut':
                source = require('images/workout.png');
                imgSize = styles.workoutImg;
                text = '운동';
                break;
              case 'Mission':
                source = require('images/mission.png');
                imgSize = styles.missionImg;
                text = '미션';
                break;
              case 'UserInfo':
                source = require('images/user.png');
                imgSize = styles.userImg;
                text = '내 정보';
                break;
              case 'Setting':
                source = require('images/setting.png');
                imgSize = styles.settingImg;
                text = '환경설정';
                break;
            }

            return (
              <Button
                key={type}
                style={styles.button}
                onPress={() => {
                  navigation.navigate(type);
                }}>
                <View style={[{flex: 1, opacity: isClick ? 1 : 0.4}]}>
                  <View style={[styles.buttonTop]}>
                    <Image
                      style={[
                        styles.buttonImg,
                        imgSize,
                        isClick && {tintColor: activeColor},
                      ]}
                      source={source}
                    />
                  </View>
                  <View style={styles.buttonBottom}>
                    <Text
                      style={[
                        styles.buttonText,
                        isClick && {color: activeColor},
                      ]}>
                      {text}
                    </Text>
                  </View>
                </View>
              </Button>
            );
          },
        )}
      </View>
    </>
  );
}
