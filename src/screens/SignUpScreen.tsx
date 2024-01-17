import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import { useNavigation } from '@react-navigation/native';



function SignUpSection(){

// This called state varibles
  const [name , setName]= useState('');
  const [email , setEmail]= useState('');
  const [password, setPassword]= useState('');

  const[saving,setSaving]=useState(false);

  const nav:any = useNavigation();

  function saveUser(){

    setSaving(true);

   // Alert.alert(name+" "+email+" "+password);

    addDoc (collection(db,'Users'),{
name:name,
email:email,
password:password

// key value 2 ma samana nm kamathi nm mekata name witarak denna unath puluwan.
    }).then(t=>{
      setSaving(false);
      Alert.alert("User is successfully registerd!")
      nav.navigate('Login');
    }).catch(e=>{
      setSaving(false);
      console.error("User account creation failed!");
      
    })

  }

    return(
  <View style={{marginTop:100}}>
  <View style={{  backgroundColor: 'rgba(169, 169, 169, 0.8)',
  borderRadius:20,
  height:60,
  marginHorizontal:30,
  justifyContent:'center',
  paddingLeft:20
  }}>
  <TextInput onChangeText={(v)=>setName(v)} placeholder='Name' 
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
  <TextInput  onChangeText={(v)=>setEmail(v)} placeholder='Your Email' 
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
  <TextInput onChangeText={(v)=>setPassword(v)} placeholder='Password' 
    secureTextEntry={true}
  placeholderTextColor={'#666'}
  style={{
    fontSize:15, color:'black'
  }}
  />
  
  </View>
 <SingnUpButton sUser={saveUser} saving={saving}/>
  <BottomSection/>
  </View>
  
    );
  }
  


  
function SingnUpButton(p:any) {
    return(
      <View style={{flexDirection:'row' ,marginTop:120}}>
  
  
        <View style={{height:70, flex:1, justifyContent:'center'}}>
  <Text style={{fontSize:25, color:'white',marginLeft:100,fontWeight:'800'}}>Sign Up</Text>
        </View>
        {/* <View style={{height:70, flex:1,justifyContent:'center',alignItems:'flex-end'}}>
  
  <View style={{width:50,height:50,backgroundColor:'#367cfe',marginRight:130 ,borderRadius:100
  ,justifyContent:'center',alignItems:'center'}}>
  <Icon size={50} color={'white'} name={'chevron-right'} type='FontAwesome'/>
  
  </View>
  
        </View> */}


<TouchableOpacity activeOpacity={0.7} onPress={p.sUser}>

<View style={{width:50,height:50,backgroundColor:'#367cfe',marginRight:130 ,borderRadius:100
 ,justifyContent:'center',alignItems:'center',marginTop:10}}>

   {

     (p.saving)?<ActivityIndicator color='white'/>
     :<Icon size={50} color={'white'} name={'chevron-right'} type='FontAwesome'/>
   }
 {/* <Icon size={50} color={'white'} name={'chevron-right'} type='FontAwesome'/> */}






 
 </View>
</TouchableOpacity>
 
       
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