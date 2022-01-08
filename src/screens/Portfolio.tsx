import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfigStyle from '../assets/Styles';

interface Props {}

const Portfolio = (props: Props) => {
    return (
        <View style={ConfigStyle.containerText}>
            <Text style={ConfigStyle.subTextContainer}>Portafolio</Text>
        </View>
    );
};

export default Portfolio;

const styles = StyleSheet.create({});
