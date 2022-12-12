import { View, Text, Image } from 'react-native'
import equbLogo from '../assets/equbLogo.png'
import React from 'react'

export const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={equbLogo} />
            </View>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = {
    headerTitle: {
        fontSize: 20,
        // marginBottom: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(245, 250, 238)',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 55
    }
}