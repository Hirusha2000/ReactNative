import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/img/balo.jpg')}
        resizeMode='cover'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
