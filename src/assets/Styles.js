import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTextContainer: {
        textAlign: 'justify',
        paddingBottom: 25,
        paddingHorizontal: 25,
        color: Colors.secondarySubtitle
    }
});
