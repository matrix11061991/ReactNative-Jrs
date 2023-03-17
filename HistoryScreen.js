import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { data } from '../data';
import { Header } from '../components/Header';
import { ChapterCard } from '../components/ChapterCard';
import axios from 'axios';

export const HistoryScreen = () => {
  const [chapters, setChapters] = useState([]);

  return (
    <View style={styles.container}>
      <Header title="Histoire-Géographie" />
      <View style={styles.content}>
        <FlatList
          data={data.history}
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

