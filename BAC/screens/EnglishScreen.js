import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { data } from '../data';
import { chapterDataMath } from '../data/chapterDataMath';
import { Header } from '../components/Header';
import { ChapterCard } from '../components/ChapterCard';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const EnglishScreen = () => {
  const [chapters, setChapters] = useState([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Anglais" />
      <View style={styles.content}>
        <FlatList
          data={data.math}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                //const chapterData = require('../data/chapterData');
                const chapter = chapterDataMath.chapter1[item.id];
                navigation.navigate('Chapter', { chapter });
              }}>
              <ChapterCard title={item.title} summary={item.summary}/>
            </TouchableOpacity>
          )}
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
