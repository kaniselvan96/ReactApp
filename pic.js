import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function Pic() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>My Picture</Text>
            <TouchableOpacity onPress={() => console.log("Image Tapped")}>
                <Image source={{
                    width: 200,
                    height: 300,
                    uri: "https://picsum.photos/200/300"
                }} />
            </TouchableOpacity >
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

