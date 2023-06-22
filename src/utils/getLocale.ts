import {Platform, NativeModules} from 'react-native';

const getLocale = () => {
  const lang =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;

      const deviceLang = lang.split('-')

    return deviceLang[0];
};
export default getLocale;
