import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Home from './src/screens/Home';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_BG_CL_ONE, PRIMARY_BG_CL_TWO} from './src/styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LinearGradient
        colors={[
          PRIMARY_BG_CL_ONE.backgroundColor,
          PRIMARY_BG_CL_TWO.backgroundColor,
        ]}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </LinearGradient>
    </Provider>
  );
};

export default App;
