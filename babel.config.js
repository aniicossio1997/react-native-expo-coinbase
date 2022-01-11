module.exports = {
    presets: [
        'module:metro-react-native-babel-preset',
        '@babel/preset-typescript'
    ],
    plugins: ['react-native-reanimated/plugin']
};
// module.exports = function (api) {
//     api.cache(true);
//     return {
//         presets: ['babel-preset-expo'],
//         plugins: [
//             [
//                 'module-resolver',
//                 {
//                     extensions: ['.tsx', '.ts', '.js', '.json']
//                 }
//             ],
//             'react-native-reanimated/plugin'
//         ]
//     };
// };
