import { View, Text, Image } from 'react-native'
import equbLogo from '../assets/equbLogo.png'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export const Footer = ({ children }) => {
    return (
        <LinearGradient
            colors={['rgb(245, 250, 238)', "#7BCCC9"]}
            start={{ x: 0.5, y: 0.3 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            {children}
            <View style={styles.footerContainer}>
                <Text className="text-center w-[70%]">
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                </Text>
                <View className="border-[1px] border-[white] w-full mb-[-35px] mt-[20px]">

                </View>
                <View className="w-[200px] items-center mb-[-15px]">
                    <Image source={equbLogo} className="scale-50 h-[70px] " />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = {
    container: {
        backgroundColor: 'rgb(245, 250, 238)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
        width: '100%',
    },
    footerContainer: {
        alignItems: 'center',
        justifySelf: 'flex-end',
        width: '100%',
    },
    logo: {
        marginBottom: -15,
        shadowColor: "#000",
    }
}