import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator , StatusBar} from 'react-native';
import Weather from "./Weather";

const API_KEY = "e98f83c65a2c7e805937d828f0003cc2";
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
export default class App extends Component {

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        // this.setState({
        //   isLoaded:true
        // })
        this._getWeather(position.coords.latitude , position.coords.longitude);
      },
      error =>{
        this.setState({
          error: error
        })
      }
    )
  }
  _getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature:json.main.temp,
          name:json.weather[0].main,
          isLoaded:true
        })
      });
  };
  state = {
    isLoaded : false,
    error : null,
    temperature : null,
    name: null
  };
  render(){
    const { isLoaded, error ,temperature} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        { isLoaded ? <Weather temp={Math.floor(temperature - 273)} /> : (
          <View style = {styles.loading}>
            <Text style = {styles.loadingText}>Getting the Weather Loading</Text>
            {/* {error ? <Text style={styles.errorText}>{error}</Text> : null } */}
          </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  errorText:{
    color:'red',
    marginBottom:20
  },
  loading: {
    flex : 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft : 25
  },
  loadingText:{
    fontSize : 38,
    marginBottom: 100,
    textAlign:'center'
  }
});
