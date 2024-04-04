/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Navigator} from './src/navigation';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
}

export default App;
