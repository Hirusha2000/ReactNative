import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';



function SignUpSection(){

    return(
  <View style={{marginTop:100}}>
  <View style={{  backgroundColor: 'rgba(169, 169, 169, 0.8)',
  borderRadius:20,
  height:60,
  marginHorizontal:30,
  justifyContent:'center',
  paddingLeft:20
  }}>
  <TextInput placeholder='Name' 
  placeholderTextColor={'#666'}
  style={{
    fontSize:15, color:'black'
  }}
  />
  
  </View>
  
  <View style={{ backgroundColor: 'rgba(169, 169, 169, 0.8)',
  borderRadius:20,
  height:60,
  marginHorizontal:30,
  justifyContent:'center',
  paddingLeft:20,
  marginTop:20
  }}>
  <TextInput placeholder='Your Email' 
  placeholderTextColor={'#666'}
  style={{
    fontSize:15, color:'black'
  }}
  />
  
  </View>

  <View style={{ backgroundColor: 'rgba(169, 169, 169, 0.8)',
  borderRadius:20,
  height:60,
  marginHorizontal:30,
  justifyContent:'center',
  paddingLeft:20,
  marginTop:20
  }}>
  <TextInput placeholder='Password' 
  placeholderTextColor={'#666'}
  style={{
    fontSize:15, color:'black'
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
      <View style={{flexDirection:'row' ,marginTop:120}}>
  
  
        <View style={{height:70, flex:1, justifyContent:'center'}}>
  <Text style={{fontSize:25, color:'white',marginLeft:100,fontWeight:'800'}}>Sign Up</Text>
        </View>
        <View style={{height:70, flex:1,justifyContent:'center',alignItems:'flex-end'}}>
  
  <View style={{width:50,height:50,backgroundColor:'#367cfe',marginRight:130 ,borderRadius:100
  ,justifyContent:'center',alignItems:'center'}}>
  <Icon size={50} color={'white'} name={'chevron-right'} type='FontAwesome'/>
  
  </View>
  
        </View>
       
      </View>
    );
  
  }
  
  function BottomSection() {
    return(
      <View style={{flexDirection:'row' ,marginTop:30}}>
  

  
        <View style={{height:70, flex:1, justifyContent:'center',}}>
  <Text style={{fontSize:15, color:'#B6A5A1',fontWeight:'800',textAlign:'center'}}>Already have an account ? Then, Sign In</Text>
        </View> 
       
      </View>
    );
  
  }
  

const SignUpScreen = () => {
  return (
    
        <View style={styles.container}>
    
        <Image
            style={styles.image}
            source={require('../../assets/img/kottu.jpg')}
            resizeMode='cover'
          />
    
          <Text style={styles.welText}>{'Create Account'}</Text>
         
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
      textAlign:'center',
  fontSize:50,
  color:'white',
  fontWeight:'600',
  marginTop:100,
  fontFamily:"Lobster-Regular"
  
  
    }
  })