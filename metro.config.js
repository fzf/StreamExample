const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);
config.resolver.unstable_enablePackageExports = true
config.resolver.extraNodeModules = {
  crypto: require.resolve('expo-crypto'),
};
config.resolver.unstable_conditionNames = [
  'browser',
  'require',
  'react-native',
]

module.exports = config;
