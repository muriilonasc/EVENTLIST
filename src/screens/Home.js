import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import EventCards from '../components/EventCards';
import Modal from '../components/Modal';
import EVENTLIST from '../events/eventList';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null); // Estado para o item selecionado
  const [modalVisible, setModalVisible] = useState(false); // Estado para a visibilidade do modal

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={EVENTLIST}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <EventCards 
              texto={item.evento}
              info={item.info}
              iconName={item.iconName}
            />
          </TouchableOpacity>
        )}
      />
      {selectedItem && (
        <Modal
          eventtitle={selectedItem.evento}
          eventinfo={selectedItem.moreinfo}
          visible={modalVisible}
          onClose={closeModal}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CFD6E0',
    padding: 8,
  },
});