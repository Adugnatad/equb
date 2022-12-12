import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeathersIcon from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Footer } from '../components';

export const Accounts = () => {
    return (
        <Footer>
            <View
                style={styles.container}>
                <LinearGradient
                    colors={['#7BCCC9', '#BEE4DC', "#7BCCC9"]}
                    start={{ x: 0.5, y: 0.0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.accountContainer}
                >
                    <View style={styles.accountsList}>
                        <Text style={styles.accountTitle}>Select your Account for Equb</Text>
                        <TouchableOpacity style={styles.account}>
                            <MaterialIcon name="wallet" size={25} color="#27AFB0" />
                            <Text style={styles.accountText}>Saving Account ****2236</Text>
                            <FeathersIcon name="arrow-down-circle" size={25} color="#27AFB0" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>continue</Text>
                        <FeathersIcon name="arrow-right-circle" size={25} color="#fff" />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </Footer>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    accountContainer: {

        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 20,
        borderRadius: 20,
        shadowColor: "#000",
        elevation: 8,
    },
    accountsList: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    account: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#C7D8D4',
        padding: 5,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 5,
    },
    accountTitle: {
        fontSize: 15,
        fontFamily: 'sans-serif-medium',

    },
    accountText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    buttonStyle: {
        backgroundColor: '#F29E68',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 5,
    }
}
