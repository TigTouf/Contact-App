import React from 'react';
import {
 View,
 ImageBackground
} from 'react-native';
import {Avatar, Text, Button, Divider} from 'react-native-elements'


export default class HomeScreen extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/contact.jpg")}>

     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

           <Text h1 style={{color: "#FFFFFF"}}>Contact App</Text>

           <Divider style={{margin: 50}}/>

           <Button
             title="OUVRIR"
             style={{width:100}}
             backgroundColor='#3498db'
             onPress={ ()=> this.props.navigation.navigate('Contact')}
             >
           </Button>
           <Divider style={{height:20}}/>

     </View>

     </ImageBackground>    );
 }
}
