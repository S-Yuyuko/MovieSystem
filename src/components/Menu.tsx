import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Animated } from 'react-native';
import GenreIcon from './icons/GenreIcon';
import CrossIcon from './icons/CrossIcon';
import { useMenu } from './utils/MenuUtils'; // Import the menu utility
import { lightStyles, darkStyles } from './styles/MenuStyles'; // Import the styles

const Menu: React.FC<{ onGenreSelect: (genreId: number, genreName: string) => void }> = ({ onGenreSelect }) => {
  const { modalVisible, slideAnim, genres, isDarkTheme, styles, openMenu, closeMenu, handleGenrePress } = useMenu(onGenreSelect);
  const themeStyles = styles === 'dark' ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <View style={themeStyles.container}>
      <TouchableOpacity style={themeStyles.iconButton} onPress={openMenu}>
        <GenreIcon size={40} />
        <Text style={themeStyles.iconText}>Genres</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeMenu}
      >
        <Animated.View style={[themeStyles.modalContainer, { transform: [{ translateX: slideAnim }] }]}>
          <TouchableOpacity style={themeStyles.closeButton} onPress={closeMenu}>
            <CrossIcon size={24} color={isDarkTheme ? '#fff' : '#000'} />
          </TouchableOpacity>
          <FlatList
            data={genres}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleGenrePress(item.id, item.name)}>
                <Text style={themeStyles.genreItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      </Modal>
    </View>
  );
};

export default Menu;
