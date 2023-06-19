import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

interface YogabilityProps {
  uri: string;
}

export const Yogability: React.FC<YogabilityProps> = ({uri}) => {
  const insets = useSafeAreaInsets();

  return (
    <WebView
      source={{uri}}
      mixedContentMode="compatibility"
      startInLoadingState={true}
      style={{marginTop: insets.top}}
    />
  );
};
