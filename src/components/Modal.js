import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function Modals({ eventtitle, eventinfo, visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{eventtitle}</Text>
          <Text style={styles.info}>{eventinfo}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tenho interesse!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7DA9FF',
    padding: 10,
    borderRadius: 8,
    margin: 3,
    borderBottomWidth: 2,
    borderColor: '#0051FF'
  },
  buttonText: {
    color: '#0051FF',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});