import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App() {
  const colorScheme = useColorScheme()==='light';
  return (
    <View style={styles.container}>
      <Text style={colorScheme?styles.bigBlue:styles.bigRed}>react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 2,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigRed: {
    color: 'red',
    backgroundColor: 'yellow',
    fontSize: 60,
  },
});
export default App;
