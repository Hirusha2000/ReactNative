import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';




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
<SingnInButton/>
</View>

  );
}


function SingnInButton() {
  return(
    <View style={{flexDirection:'row' ,marginTop:20}}>


      <View style={{height:70, flex:1, justifyContent:'center'}}>
<Text style={{fontSize:25, color:'black',marginLeft:50,fontWeight:'500'}}>Sign In</Text>
      </View>
      <View style={{height:70, flex:1,justifyContent:'center',alignItems:'flex-end'}}>

<View style={{width:50,height:50,backgroundColor:'#367cfe',marginRight:50 ,borderRadius:100
,justifyContent:'center',alignItems:'center'}}>
<Icon size={50} color={'white'} name={'chevron-right'} type='FontAwesome'/>

</View>

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
     
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
      <LoginField/>
    </KeyboardAwareScrollView>
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
