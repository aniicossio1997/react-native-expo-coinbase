import React, { FC, useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import DraggableFlatList, {
    RenderItemParams
} from 'react-native-draggable-flatlist';
import * as Haptics from 'expo-haptics';

import * as watchlistActions from '../store/actions/watchlist';
import Coin from '../models/Coin';
import Colors from '../assets/Colors';
import WatchlistItem from './WatchListItem';

interface TopMoversProps {
    coinData: Coin[];
}

const WatchList: FC<TopMoversProps> = ({ coinData }) => {
    const dispatch = useDispatch();

    const renderItem = useCallback(
        ({ item, drag, isActive }: RenderItemParams<Coin>) => {
            return (
                <WatchlistItem
                    id={item.id}
                    name={item.name}
                    symbol={item.symbol}
                    price={item.price}
                    percentChange={item.percentChange}
                    drag={drag}
                    isActive={isActive}
                />
            );
        },
        []
    );

    return (
        <View>
            <Text style={styles.watchlistText}>Watchlist</Text>
            <View style={styles.watchlistContainer}>
                <DraggableFlatList
                    data={coinData}
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={false}
                    onDragBegin={() =>
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }
                    onDragEnd={({ data }) =>
                        dispatch(watchlistActions.updateCoinData(data))
                    }
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    watchlistText: {
        fontSize: 21,
        fontWeight: '600',
        marginTop: 64,
        marginBottom: 10
    },
    watchlistContainer: {
        width: '88%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.border,
        backgroundColor: 'white'
    }
});

export default WatchList;
