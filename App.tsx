import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_BG_CL_ONE, PRIMARY_BG_CL_TWO} from './src/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppRouter from './src/components/AppRouter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
