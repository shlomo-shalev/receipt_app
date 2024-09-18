import React from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

export default function Iframe({children = undefined, src, height = 100, iframeRef = null, ...props}) {
  return (
    <SafeAreaView style={{ height }}>
      <WebView 
        ref={iframeRef}
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