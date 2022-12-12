import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Accounts, PasswordSet } from '../pages';
import { Header } from '../components';
import React from 'react'
import { Footer } from '../components';

const RootStack = () => {

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={
            {
                header: () => <Header />
            }
        }>
            <Drawer.Screen
                options={{
                    header: () => <Header title={'Account'} />
                }}
                name="Account" component={Accounts} />
            <Drawer.Screen
                options={{
                    header: () => <Header title={'Set Password'} />
                }}
                name="setPassword" component={PasswordSet} />
        </Drawer.Navigator>
    )
}

export default RootStack