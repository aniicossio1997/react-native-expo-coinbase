import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfigStyle from '../assets/Styles';

interface Props {}

const Actions = (props: Props) => {
    return (
        <View style={ConfigStyle.containerText}>
            <Text style={ConfigStyle.subTextContainer}>Actions</Text>
        </View>
    );
};

export default Actions;

const styles = StyleSheet.create({});
