import { View, Text , Button} from 'react-native'
import React from 'react'


const ScreenA = (p:any) => {

    function gotoBack(){
p.navigattion.goBack();
    }

    function gotoScreenB(){
        p.navigattion.navigate('B')
            }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30,color:'red',}}>ScreenA</Text>
      <Button title='go Back' onPress={gotoBack}/>
      <Button title='go to Screen B' onPress={gotoScreenB}/>
    </View>
  )
}

export default ScreenA