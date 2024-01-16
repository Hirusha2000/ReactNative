import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';



function SignUpSection(){

    return(
  <View style={{marginTop:20}}>
  <View style={{ backgroundColor:'white',
  borderRadius:20,
  height:60,
  marginHorizontal:30,
  justifyContent:'center',
  paddingLeft:20
  }}>
  <TextInput placeholder='Name' 
  placeholderTextColor={'#265CA5'}
  style={{
    fontSize:15
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
  <TextInput placeholder='Your Email' 
  placeholderTextColor={'#265CA5'}
  style={{
    fontSize:15
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
    fontSize:15
  }}
  />
  
  </View>
 <SingnUpButton/>
  <BottomSection/>
  </View>
  
    );
  }
  


  
function SingnUpButton() {
    return(
      <View style={{flexDirection:'row' ,marginTop:20}}>
  
  
        <View style={{height:70, flex:1, justifyContent:'center'}}>
  <Text style={{fontSize:25, color:'black',marginLeft:50,fontWeight:'800'}}>Sign Up</Text>
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
  
  function BottomSection() {
    return(
      <View style={{flexDirection:'row' ,marginTop:20}}>
  

  
        <View style={{height:70, flex:1, justifyContent:'center',alignItems:'flex-end'}}>
  <Text style={{fontSize:15, color:'red',marginRight:50,fontWeight:'800'}}>Sign In</Text>
        </View> 
       
      </View>
    );
  
  }
  

const SignUpScreen = () => {
  return (
    
        <View style={styles.container}>
    
        <Image
            style={styles.image}
            source={require('../../assets/img/balo.jpg')}
            resizeMode='cover'
          />
    
          <Text style={styles.welText}>{'Create\nAccount'}</Text>
         
          <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
          <SignUpSection/>
        </KeyboardAwareScrollView>
        </View>
      
  )
}

export default SignUpScreen

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
  })