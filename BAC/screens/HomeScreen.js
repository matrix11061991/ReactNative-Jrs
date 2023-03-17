import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HomeScreen = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Header title="Résumé BAC" />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Math')}>
          <MaterialCommunityIcons name="calculator" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Mathématiques</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Physics')}>
          <MaterialCommunityIcons name="atom" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Physique-Chimie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('History')}>
          <MaterialCommunityIcons name="earth" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Histoire-Géographie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Technology')}>
          <MaterialCommunityIcons name="phone" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Technologie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('English')}>
          <MaterialCommunityIcons name="alphabetical" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Anglais</Text>
        </TouchableOpacity>
        {/* Ajouter d'autres boutons pour chaque matière */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2017 MatrixTera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4a4a4a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundGradient: {
      colors: ['#2e2e2e', '#4a4a4a'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    //fontFamily: 'Bauhaus 93',
  },
  icon: {
    marginRight: 10,
  },
  footer: {
    backgroundColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    },
    footerText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    },
});
