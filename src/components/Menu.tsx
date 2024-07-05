import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Animated, Dimensions } from 'react-native';
import useGenres from '../hooks/useGenres';
import GenreIcon from './GenreIcon';
import CrossIcon from './CrossIcon';

const { width } = Dimensions.get('window');

const Menu: React.FC<{ onGenreSelect: (genreId: number, genreName: string) => void }> = ({ onGenreSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const { genres } = useGenres();

  const handleGenrePress = (id: number, name: string) => {
    onGenreSelect(id, name);
    closeMenu();
  };

  const openMenu = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={openMenu}>
        <GenreIcon size={40} />
        <Text style={styles.iconText}></Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeMenu}
      >
        <Animated.View style={[styles.modalContainer, { transform: [{ translateX: slideAnim }] }]}>
          <TouchableOpacity style={styles.closeButton} onPress={closeMenu}>
            <CrossIcon size={24} color="#fff" />
          </TouchableOpacity>
          <FlatList
            data={genres}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleGenrePress(item.id, item.name)}>
                <Text style={styles.genreItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#1E90FF',
    fontSize: 18,
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  genreItem: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
});

export default Menu;
