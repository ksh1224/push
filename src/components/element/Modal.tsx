import React from 'react';
import { View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { ESS } from 'utils/stylesUtil';

const styles = ESS({
  flex: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#0005',
    alignItems: 'center',
  },
});

interface ModalProps {
  visible?: boolean;
  close?: () => void;
  children: JSX.Element;
}

export function CustomModal({
  visible = false,
  close = () => {},
  children,
}: ModalProps) {
  return (
    <Modal isVisible={visible}>
      <View style={styles.flex}>
        <Pressable onPress={close} style={styles.modalContainer}>
          <Pressable onPress={() => {}}>{children}</Pressable>
        </Pressable>
      </View>
    </Modal>
  );
}
