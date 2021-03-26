/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'components/element/Button';
import React, { useEffect, useState } from 'react';
import { View, Modal, Text, Pressable } from 'react-native';
import { ESS, REM, backgraoundColor } from 'utils/stylesUtil';
import CircularSlider from './CircularSlider';

type Props = {
  visible?: boolean;
  close?: () => void;
};

type TimeSelect = 'H' | 'M' | 'S';

const styles = ESS({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20,20,20, 0.2)',
  },
  modalWrap: {
    width: 350 * REM,
    paddingTop: 10 * REM,
    height: 450 * REM,
    backgroundColor: '$cardColor',
    borderColor: '$disableColor',
    borderWidth: 1 * REM,
    borderRadius: 20 * REM,
    position: 'absolute',
  },
  circleWrap: {
    flex: 1,
    width: 350 * REM,
    height: 350 * REM,
    alignItems: 'center',
  },
  timeTextWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 40 * REM,
    fontFamily: '$fontBold',
    fontWeight: '900',
    color: '#fff',
  },
  colon: {
    paddingBottom: 7 * REM,
    paddingHorizontal: 5 * REM,
  },
  select: {
    color: '$activeColor',
  },
});

const numberToTwoString = (number: number): string =>
  number < 10 ? `0${number}` : `${number}`;

export default function TimeSettingModal({
  visible = false,
  close = () => {},
}: Props) {
  const [angleLength, setAngleLength] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [select, setSelect] = useState<TimeSelect>('S');
  const [timeValue, setTimeValue] = useState(0);

  useEffect(() => {
    switch (select) {
      case 'H':
        setHour(Math.floor((timeValue / 100) * 24));
        break;
      case 'M':
        setMinute(Math.floor((timeValue / 100) * 60));
        break;
      case 'S':
        setSecond(Math.floor((timeValue / 100) * 60));
        break;
      default:
        break;
    }
  }, [timeValue]);

  useEffect(() => {
    switch (select) {
      case 'H':
        setAngleLength((hour / 24) * (2 * Math.PI));
        break;
      case 'M':
        setAngleLength((minute / 60) * (2 * Math.PI));
        break;
      case 'S':
        setAngleLength((second / 60) * (2 * Math.PI));
        break;
      default:
        break;
    }
  }, [select]);

  useEffect(() => {
    if (visible) {
      setHour(0);
      setMinute(0);
      setSecond(0);
      setAngleLength(0);
    }
  }, [visible]);

  // useEffect(() => {
  //   console.log('timeValue', timeValue);
  // }, [timeValue]);

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modal}>
        <View style={styles.modalWrap}>
          <View style={styles.circleWrap}>
            <View>
              <CircularSlider
                angleLength={angleLength}
                clockFaceType={select === 'H' ? '24' : '60'}
                onUpdate={({ percent }) => setTimeValue(percent)}
                bgCircleColor={backgraoundColor}
                clockFaceColor="#fff"
              />
              <View style={styles.timeTextWrap}>
                <Pressable onPress={() => setSelect('H')}>
                  <Text
                    style={[styles.timeText, select === 'H' && styles.select]}>
                    {numberToTwoString(hour)}
                  </Text>
                </Pressable>
                <Text style={[styles.timeText, styles.colon]}>:</Text>
                <Pressable onPress={() => setSelect('M')}>
                  <Text
                    style={[styles.timeText, select === 'M' && styles.select]}>
                    {numberToTwoString(minute)}
                  </Text>
                </Pressable>
                <Text style={[styles.timeText, styles.colon]}>:</Text>
                <Pressable onPress={() => setSelect('S')}>
                  <Text
                    style={[styles.timeText, select === 'S' && styles.select]}>
                    {numberToTwoString(second)}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
