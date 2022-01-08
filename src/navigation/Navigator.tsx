import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import News from '../screens/News';
import { routes } from './routes';
import TabBar from '../components/TabBar';

const TabBarNavigator = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen name="Home" component={Home} />
            <HomeStackNavigator.Screen name="News" component={News} />
        </HomeStackNavigator.Navigator>
    );
};
const TabNavigator = () => {
    return (
        <>
            <TabBarNavigator.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#E42C64'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        alignSelf: 'center'
                    },
                    headerTitleAlign: 'center'
                }}
                tabBar={(props) => <TabBar {...props} />}
            >
                {routes.map((navRoute) => (
                    <TabBarNavigator.Screen
                        name={navRoute.name}
                        component={navRoute.Component}
                        key={navRoute.name}
                    />
                ))}
            </TabBarNavigator.Navigator>
        </>
    );
};
const Navigator = () => {
    return (
        <>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </>
    );
};
export default Navigator;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});
