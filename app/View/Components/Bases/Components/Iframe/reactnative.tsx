import React from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

export default function Iframe({children = undefined, src, height = 100, ...props}) {
  return (
    <SafeAreaView style={{ height }}>
      <WebView
        source={{
          uri: src,
        }}
        mediaPlaybackRequiresUserAction={true}
        originWhitelist={['*']}
        {...props}
      />
    </SafeAreaView>
  );
}