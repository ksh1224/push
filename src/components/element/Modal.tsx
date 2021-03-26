import React from 'react';
import { View, Modal, Pressable } from 'react-native';
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

export default function CustomModal({
  visible = false,
  close = () => {},
  children,
}: ModalProps) {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.flex}>
        <Pressable onPress={close} style={styles.modalContainer}>
          <Pressable onPress={() => {}}>{children}</Pressable>
        </Pressable>
      </View>
    </Modal>
  );
}
