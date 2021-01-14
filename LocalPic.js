import React from 'react'
import { ImageBackground, StyleSheet, View, Image } from 'react-native'

export default function LocalPic() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('./assets/furniture.jpg')}
        >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
})