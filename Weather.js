import React , {Component} from 'react';
import { StyleSheet , View , Text , Image } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component{
//   render(){
//     return(
//       <LinearGradient colors={["#00C6FB","#005BEA"]} style={styles.container}>
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy"/>
//           <Text style={styles.temp}>35</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining Like a Weather</Text>
//           <Text style={styles.subtitle}>For more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

const  weatherCases = {
  Rain : {
    colors:["#00C6FB","#005BEA"],
    title : "Raining",
    subtitle : 'Outside is Rain',
    icon: 'ios-rainy'
  },
  Clear : {
    colors:["#FEF253","#FF7300"],
    title : "Sunny",
    subtitle : 'Outside is Sunny',
    icon: 'ios-sunny'
  },
  Thunderstorm : {
    colors:["#00ECBC","#007ADF"],
    title : "Thunderstorm",
    subtitle : 'Outside is Thunderstorm',
    icon: 'ios-Thunderstorm'
  },
  Cloud : {
    colors:["#D7D2CC","#304352"],
    title : "Cloud",
    subtitle : 'Outside is Cloud',
    icon: 'ios-cloudy'
  },
  Snow : {
    colors:["#7DE2FC","#89B6E5"],
    title : "Snow",
    subtitle : 'Outside is Snow',
    icon: 'ios-snow'
  },
  Drizzle : {
    colors:["#89F7FE","#66A6FF"],
    title : "Drizzle",
    subtitle : 'Outside is Drizzle',
    icon: 'ios-rainy-outline'
  }
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
}


function Weather({temp}){
  return(
    <LinearGradient colors={weatherCases['Clear'].colors} style={styles.container}>
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases['Clear'].icon}/>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases['Clear'].title}</Text>
        <Text style={styles.subtitle}>{weatherCases['Clear'].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}
export default Weather;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  upper:{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  temp:{
    fontSize: 30,
    color:'white',
    marginBottom: 25,
    marginTop: 10
  },
  lower:{
    flex: 1,
    alignItems : 'center',
    justifyContent : 'flex-end',
  },
  title:{
    fontSize: 28,
    color:'white',
    marginBottom:10,
    fontWeight:"400",
    textAlign:'center'
  },
  subtitle:{
    fontSize: 20,
    color:'white',
    marginBottom: 80,
    textAlign:'center'
  }
})
