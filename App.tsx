import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';



function LoginField(){

  return(
<View style={{marginTop:40}}>
<View style={{ backgroundColor:'white',
borderRadius:20,
height:60,
marginHorizontal:30,
justifyContent:'center',
paddingLeft:20
}}>
<TextInput placeholder='Your Email' 
placeholderTextColor={'#265CA5'}
style={{
  fontSize:20
}}
/>

</View>

<View style={{ backgroundColor:'white',
borderRadius:20,
height:60,
marginHorizontal:30,
justifyContent:'center',
paddingLeft:20,
marginTop:20
}}>
<TextInput placeholder='Password' 
placeholderTextColor={'#265CA5'}
style={{
  fontSize:20
}}
/>

</View>

</View>

  );
}


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/img/balo.jpg')}
        resizeMode='cover'
      />

      <Text style={styles.welText}>{'Welcome\nBack'}</Text>
      <LoginField/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    position:'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },

  welText:{
fontSize:50,
color:'#3A8BF8',
fontWeight:'600',
marginTop:120,
marginLeft:30


  }
});

export default App;
