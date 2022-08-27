import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://expo.dev' }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
