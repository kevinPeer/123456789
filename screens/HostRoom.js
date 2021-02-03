import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';

import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
  constructor(){
  }

 
//   renderItem = ( {item, i} ) =>{
//     return (
//       <ListItem
//         key={i}
//         title={item.book_name}
//         subtitle={item.reason_to_request}
//         titleStyle={{ color: 'black', fontWeight: 'bold' }}
//         rightElement={
//             <TouchableOpacity style={styles.button}>
//               <Text style={{color:'#ffff'}}>View</Text>
//             </TouchableOpacity>
//           }
//         bottomDivider
//       />
//     )
//   }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Host Room"/>
        <View style={{flex:1}}>
          {
            
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>Host Room</Text>
              </View>
           
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})