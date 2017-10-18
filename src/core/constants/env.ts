import { Platform } from 'react-native';

export const Env = {
    isDev: __DEV__,
    isProd: !__DEV__,
    isAndroid: Platform.OS.toLowerCase() === 'android',
    isIos: Platform.OS.toLowerCase() === 'ios',
};
