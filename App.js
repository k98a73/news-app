import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    alert(Constants.manifest.extra.newsApiKey);
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearImmediate(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
