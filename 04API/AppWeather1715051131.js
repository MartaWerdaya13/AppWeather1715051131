import React from 'react';
import {StyleSheet,View, TextInput, TouchableOpacity, Text} from 'react-native';
import Loading from "./Loading";
export default class AppWeather1715051131 extends React.Component {

constructor(props) {
super(props)
this.state = {
  city: '',
  forecast: {
    main: '-',
    description: '-',
    temp: 0,
    isLoading: false,
    }
  };
}

getWeather= () => {
  this.setState({isLoading:true})
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='
  + this.state.city +
  '&APPID=3f91b3f39095ba09a6271dd782392f61&units=metric';
  return fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({isLoading:false})
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  });
}

render() {
  return (
    <View style={styles.container}>
{/* bagian header */}
      <View style={styles.header}>
        <Text style={{color: 'white'}}>
          Prakiraan Cuaca
        </Text>
      </View> 
{/* bagian box input */}
      <View style={styles.box}>
        <Text style={styles.text}>
          Masukkan Nama Kota
        </Text>
        <TextInput 
        style={styles.inputText}
        placeholder="input nama"
        onChangeText={( city )=> this.setState({ city })} />
        <TouchableOpacity
          style = {styles.button}
          onPress={()=> this.getWeather()}>
          <Loading show={this.state.isLoading}/>
          <Text style={{color: 'black',marginBottom:70,}}>
            Look the Weather
          </Text>
        </TouchableOpacity>
      </View> 
{/* bagian deskripsi cuaca */}
      <View style={styles.deskripsi}>
        <Text style={styles.text}>
            Kota        = {this.state.city} {"\n"}
        </Text>
        <Text style={styles.text}>
            Temperature = {this.state.forecast.temp}{'°Celcius \n'}
        </Text>
        <Text style={styles.text}>
            Weather     = {this.state.forecast.main} {'\n'}     
        </Text>
        <Text style={styles.text}>
            Description = {this.state.forecast.description} {'\n'}
        </Text>
      </View> 
{/* bagian footer dari App */}
      <View style={styles.footer}>
        <Text style={{color: 'white'}}>
          {'\u00A9'}MartaWerdaya13 2019
        </Text>
      </View> 

    </View>
    );
  }
}

const styles = StyleSheet.create({
container : {
  flex: 1,
  backgroundColor: 'white',
},

header:{
  flex:1,
  backgroundColor: '#173e43',
  width: "100%",
  justifyContent: 'center',
  alignItems: 'center',
},

box:{
  flex:3,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#3fb0ac',
  margin: 7,
},

inputText: {
  width: 200,
  height: 40,
  marginTop: 10,
  backgroundColor: 'white',
},

button: {
  marginTop: 30,
  width: 190,
  height: 70,
  backgroundColor: '#fae596',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
},

deskripsi:{
  flex: 4,
  backgroundColor: '#3fb0ac',
  margin: 7,
},

text:{
  marginLeft: 10,
  justifyContent: 'space-between',
  marginTop: 15,
},

footer:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#173e43',
},

});
// Apps ini dibuat oleh : Kadek Marta werdaya
// mohon tidak mengcopy atau menduplikat tanpa seizin dari pembuat
// etika itu penting