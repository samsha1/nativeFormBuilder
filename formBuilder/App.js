import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert} from 'react-native';

const API = "https://learned.agencycanoe.com/app-submit/";

export default class App extends React.Component {

   constructor(props) {
    super(props);
    this.state={
      text:null,
      buttonClicked:false
    };
  }

    handleSubmit = () =>{
      this.setState({
          buttonClicked: true
      });
      axios.get(API)
           //.then((result) => console.log(result.data))
      .then((result)  => 
        {
          if(result.data.success==true){
            Alert.alert("SUBMITTED. THAKNS!");
            this.setState({ buttonClicked: false,text:null})
          }
        })
    };


  render() {
    const {
      buttonClicked
    }=this.state;
    return (
        <View>
         <View style={styles.container}>
          <Text style={styles.headerTextStyle}>THINGS I LEARNED</Text>
         </View>
          <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
          />
          <TouchableOpacity
              style={styles.button}
              onPress={this.handleSubmit}
            >
            <Text style={styles.buttonText}>{buttonClicked ? 'SUBMITTING...':'SUBMIT' }</Text>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    height:110,
    backgroundColor: '#a1caf1',
  },
  headerTextStyle:{
    fontSize:30,
    padding:40,
    fontWeight:'bold',
    color:'#fff',
    alignItems: 'center',
    justifyContent:'center'
    
  },
  inputStyle:{
    height: 200,
    margin:20, 
    borderColor: '#BBBBBB',
    borderWidth: 2,
    backgroundColor:'#F9F9F9'
  },
  button:{
    backgroundColor:'#010a4b',
    alignItems: 'center',
    padding:20,
    marginTop:10,
    marginRight:60,
    marginLeft:60
  },
  buttonText:{
    color:'white',

  }
});
