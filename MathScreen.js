import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { data } from '../data';
import { chapterDataMath } from '../data/chapterDataMath';
import { Header } from '../components/Header';
import { ChapterCard } from '../components/ChapterCard';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const MathScreen = () => {
    const [chapters, setChapters] = useState([]);
    const [expandedChapter, setExpandedChapter] = useState(null); // Etat local pour suivre l'état d'affichage du résumé

    const navigation = useNavigation();

    const toggleChapter = (id) => {
        if (expandedChapter === id) {
            setExpandedChapter(null);
        } else {
        setExpandedChapter(id);
        }
    };

return (
    <View style={styles.container}>
        <Header title="Mathématiques"/>
        <View style={styles.content}>
            <FlatList
            data={data.math}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toggleChapter(item.id)}>
                <View style={styles.chapterContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    {expandedChapter === item.id && (
                        <View style={styles.summaryContainer}>
                            <Text
                                onPress={() => {
                                    const chapter = chapterDataMath.chapter1[item.id];
                                    navigation.navigate('Chapter', { chapter });
                                }}
                                style={styles.summary}>
                                {item.summary}
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    chapterContainer: {
        borderRadius: 5,
        backgroundColor: '#F9F9F9',
        padding: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    expandedChapterContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#B9B9B9',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    summaryContainer: {
        marginTop: 8,
    },
    summary: {
        color: '#007AFF',
        fontWeight: 'bold',
        fontSize: 12,
    },
});