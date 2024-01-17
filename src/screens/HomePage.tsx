import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class HomePage extends Component {
  render() {
    return (
      <View style={{
flex:1,
justifyContent:'center',
alignItems:'center',


      }}>
        <Text style={{
            fontSize:30,
            color:'black',

        }}>Home Page</Text>
       
      </View>
    )
  }
}

export default HomePage