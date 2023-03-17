import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { data } from '../data';
import { Header } from '../components/Header';
import { ChapterCard } from '../components/ChapterCard';
import axios from 'axios';

export const PhysicsScreen = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios.get('https://mon-api.com/physics').then((response) => {
      setChapters(response.data.chapters);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Physique-Chimie" />
      <View style={styles.content}>
        <FlatList
          data={data.physics}
          renderItem={({ item }) => <ChapterCard title={item.title} summary={item.summary} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
});

