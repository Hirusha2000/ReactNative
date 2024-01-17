import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon, ThemeConsumer } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';



function LoginField(props:any){

    const stack=props.stack;

    const[userEmail,setUserEmail]=useState('');
    const[userPassword,setUserPassword]=useState('');


    return(
  <View style={{marginTop:30}}>
  <View style={{ backgroundColor:'white',
  borderRadius:20,
  height:60,
  marginHorizontal:30,
  justifyContent:'center',
  paddingLeft:20
  }}>
  <TextInput placeholder='Your Email' 
  placeholderTextColor={'#265CA5'}
  onChangeText={(v)=>setUserEmail(v)}
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
  secureTextEntry={true}
  placeholderTextColor={'#265CA5'}
  onChangeText={(v)=>setUserPassword(v)}
  style={{
    fontSize:15
  }}
  />
  
  </View>
  <SingnInButton u_email={userEmail} u_password={userPassword} s_stack={stack}/>
  <BottomSection stack={stack}/>
  </View>
  
    );
  }
  



  
function SingnInButton(p:any) {


const u_email=p.u_email;
const u_password=p.u_password;




function getUser (){
  getDocs(
    query(
      collection(db,'Users')
      ,where('email','==',u_email.toLowerCase()))) 
      .then(ds=>{
if(ds.size==1){
  const dt =ds.docs[0].data();

  Alert.alert (dt.password);

  if(dt.password==u_password){
    p.s_stack.navigate('Home')
  } else{
    Alert .alert('Message','Incorrect Password or Email')
  }

}else{

  Alert .alert('Message',"Can't find user!")
}

      })

}



  function gotoHome(){
//     if(u_email.toLowerCase()==email &&  u_password==password ){

  
// p.s_stack.navigate('Home')
// } else{

//   Alert .alert('Message','Incorrect Password or Email')
//   console.log('Incorrect Password or Email');
// }

getUser();


  }
    return(
      <View style={{flexDirection:'row' ,marginTop:20}}>
  
  
        <View style={{height:70, flex:1, justifyContent:'center'}}>
  <Text style={{fontSize:25, color:'black',marginLeft:50,fontWeight:'800'}}>Sign In</Text>
        </View>
        <View style={{height:70, flex:1,justifyContent:'center',alignItems:'flex-end'}}>
  
 <TouchableOpacity activeOpacity={0.7} onPress={gotoHome}>

 <View style={{width:50,height:50,backgroundColor:'#367cfe',marginRight:50 ,borderRadius:100
  ,justifyContent:'center',alignItems:'center'}}>
  <Icon size={50} color={'white'} name={'chevron-right'} type='FontAwesome'/>
  
  </View>
 </TouchableOpacity>
  
        </View>
       
      </View>
    );
  
  }
  
  function BottomSection(props:any) {
    const stack=props.stack;

function gotoSignUp(){
stack.navigate('SignUp')
}

    return(
   
      <View style={{flexDirection:'row' ,marginTop:10}}>
  
       <TouchableOpacity onPress={gotoSignUp}>

        <View style={{height:70, flex:1, justifyContent:'center'}}>
  <Text style={{fontSize:18, color:'black',marginLeft:50,fontWeight:'400'}}>Sign Up</Text>
        </View>
        </TouchableOpacity>
        <View style={{height:70, flex:1, justifyContent:'center',alignItems:'flex-end'}}>
  <Text style={{fontSize:15, color:'red',marginRight:50,fontWeight:'800'}}>Forget Password</Text>
        </View> 
       
      </View>
    );
  
  }
  

const LoginScreen = (props:any) => {

    const stack=props.navigation;

  return (
    
        <View style={styles.container}>
    
        <Image
            style={styles.image}
            source={require('../../assets/img/balo.jpg')}
            resizeMode='cover'
          />
    
          <Text style={styles.welText}>{'Welcome\nBack'}</Text>
         
          <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
          <LoginField stack={stack}/>
        </KeyboardAwareScrollView>
        </View>
      
  )
}

export default LoginScreen

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