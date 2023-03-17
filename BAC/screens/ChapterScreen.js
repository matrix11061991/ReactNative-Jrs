import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HTML from 'react-native-render-html';


export const ChapterScreen = ({ route }) => {
    const { chapter } = route.params;
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (index) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const { width } = useWindowDimensions();

return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>{chapter.title}</Text>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryTitle}>Résumé</Text>
                <Text style={styles.summaryText}>{chapter.summary}</Text>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={() => toggleDetails('content')} style={styles.contentTitleContainer}>
                    <Text style={styles.contentTitle}>Contenu</Text>
                    <Ionicons name={showDetails['content'] ? 'chevron-up-outline' : 'chevron-down-outline'} size={24} color="black" />
                </TouchableOpacity>
                {showDetails['content'] && chapter.content.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleDetails(index)} style={styles.contentSubTitleContainer}>
                        <View style={styles.contentSubTitleWrapper}>
                            <Ionicons name={showDetails[index] ? 'chevron-up-outline' : 'chevron-down-outline'} size={12} color="black" />
                            <Text style={styles.contentSubTitle}>{item.ti}</Text>
                        </View>
                        {showDetails[index] && (
                            <HTML source={{ html: item.details }} contentWidth={width}  style={styles.contentText} />
                        )}
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryContainer: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 11,
    },
    contentContainer: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 20,
    },
    contentTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        flex: 1,
    },
    contentSubTitleContainer: {
        marginTop: 10,
    },
    contentSubTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentSubTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
    },
    contentText: {
        fontSize: 10,
        marginLeft: 30,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
});