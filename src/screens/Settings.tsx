import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfigStyle from '../assets/Styles';
interface Props {}

const Settings = (props: Props) => {
    return (
        <View style={ConfigStyle.containerText}>
            <Text style={ConfigStyle.subTextContainer}>Configuraciones</Text>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({});
