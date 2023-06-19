import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Yogability} from './src';

const APP_URI = 'https://yogabills.herokuapp.com/';
const APP_ACCENT_COLOR = '#5D53A4';

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={{backgroundColor: APP_ACCENT_COLOR}}>
      <StatusBar barStyle="light-content" />
      <Yogability uri={APP_URI} />
    </SafeAreaProvider>
  );
}

export default App;
