import * as React from 'react';
import { Pressable, View, Text } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to our Home Screen</Text>
            <Pressable
                onPress={() => navigation.navigate('Pic')}
                style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
            >
                <Text>Picture</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('List')}
                style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
            >
                <Text>List</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('LocalPic')}
                style={{ backgroundColor: 'plum', padding: 10 }}
            >
                <Text>LocalPic</Text>
            </Pressable>
        </View>
    );
}
