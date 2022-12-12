import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FeathersIcon from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Footer } from '../components';

export const PasswordSet = () => {
    return (
        <Footer>
            <View
                style={styles.container}>
                <LinearGradient
                    colors={['#7BCCC9', '#BEE4DC', "#7BCCC9"]}
                    start={{ x: 0.5, y: 0.0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.setPasswordContainer}
                >
                    <View className="mb-3">
                        <Text>Enter New Password</Text>
                        <View style={styles.password}>
                            <MaterialIcon name="lock-open" size={25} color="#27AFB0" />
                            <Text style={styles.passwordText}>**********</Text>
                        </View>
                    </View>
                    <View className="mb-3">
                        <Text>Re-Enter New Password</Text>
                        <View style={styles.password}>
                            <MaterialIcon name="lock-open" size={25} color="#27AFB0" />
                            <Text style={styles.passwordText}>**********</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>confirm</Text>
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
    setPasswordContainer: {

        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 20,
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 20,
        shadowColor: "#fff",
        elevation: 8,
    },
    password: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#C7D8D4',
        padding: 5,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 5,
    },
    passwordText: {
        width: 250,
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
