import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfigStyle from '../assets/Styles';

interface Props {}

const Prices = (props: Props) => {
    return (
        <View style={ConfigStyle.containerText}>
            <Text style={ConfigStyle.subTextContainer}>Precios</Text>
        </View>
    );
};

export default Prices;

const styles = StyleSheet.create({});
