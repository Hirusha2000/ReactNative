import { View, Text, Button } from 'react-native'
import React from 'react'

const MainScreen = (p:any) => {

function gotoA(){
    p.navigation.navigate('A')

}
function gotoB(){
    p.navigation.navigate('B')
}


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

      <Button onPress={gotoA} title='Go to screen A'/>
      <Button onPress={gotoB} title='Go to screen B'/>
    </View>
  )
}

export default MainScreen