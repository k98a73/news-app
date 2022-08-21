import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/id/237/200/300"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/id/237/200/300"
        title="Hello World"
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/id/237/200/300"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
        author="SampleNews"
      />
      <StatusBar style="auto" />
    </View>
  );
}
