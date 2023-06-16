import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const APP_URI = 'https://yogabills.herokuapp.com/';
const APP_ACCENT_COLOR = '#5D53A4';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <WebView
        source={{uri: APP_URI}}
        mixedContentMode="compatibility"
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_ACCENT_COLOR,
  },
});

export default App;
