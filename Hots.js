import React, { Component } from 'react';
import {StyleSheet , View , Image , Text } from 'react-native';
import { LinearGradient } from "expo";
import {Ionicons} from "@expo/vector-icons";

export default class Hots extends Component{
  render(){
    return(
      <LinearGradient colors={["#FF2D00","#F86B4D"]} style={styles.container}>
        <View style={styles.upperView}>
          <Ionicons color="white" size={130} name="ios-rainy" />
          <Text style={styles.hotText} >40</Text>
        </View>
        <View style={styles.lowerView}>
          <Text style={styles.titleText}>Title Text</Text>
          <Text style={styles.subtitleText}>SubTitle Text</Text>
        </View>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container:{
      flex : 1,
  },
  upperView:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  hotText:{
    textAlign:'center',
    fontSize : 30,
  },
  lowerView:{
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-end',
  },
  titleText:{
    textAlign:'center',
    fontSize: 40,
    marginBottom : 10,
  },
  subtitleText:{
    marginBottom: 50,
    textAlign:'center',
    fontSize: 25,
  }
});
