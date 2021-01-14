import React from 'react';
import { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text } from 'react-native';

export default function List() {
    const [data, setData] = useState([
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: '3 Item',
        },
        {
            id: '5',
            title: '4 Item',
        },
        {
            id: '6',
            title: '5 Item',
        },
        {
            id: '7',
            title: '6 Item',
        },
        {
            id: '8',
            title: '7 Item',
        },
        {
            id: '9',
            title: '8 Item',
        },
    ]);


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
