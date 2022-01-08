import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './src/navigation/Navigator';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import watchlistReducer from './src/store/reducers/watchlist';
import 'react-native-gesture-handlers';
const rootReducer = combineReducers({
    watchlist: watchlistReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}
