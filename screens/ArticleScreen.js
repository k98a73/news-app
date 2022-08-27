import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is Article Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
