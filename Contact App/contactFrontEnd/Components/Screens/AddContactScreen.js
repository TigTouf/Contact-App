import React from 'react';
import { View } from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';

import ipAddress from '../Network/network';

export default class AddContactScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var ctx = this;
    // Abdel, fetch sur un serveur "distant" car "localhost". Pense à mettre ton IP dans le file Frontend '../Network/network'
    fetch('http://'+ipAddress+':3000/addcontact', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'first_name='+this.state.first_name+'&last_name='+this.state.last_name+'&email='+this.state.email+'&mobile='+this.state.mobile
    }).then(function(response) {
      return response.json()
    }).then(function(data) {
      if (data.user) {
        ctx.props.navigation.navigate('Contact');
      } else {
        console.log('erreur');
      }
    }).catch(function(error) {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>Prénom</FormLabel>
        <FormInput onChangeText={(text) => this.setState({first_name: text})}/>
        <FormLabel>Nom</FormLabel>
        <FormInput onChangeText={(text) => this.setState({last_name: text})}/>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(text) => this.setState({email: text})}/>
        <FormLabel>Mobile</FormLabel>
        <FormInput onChangeText={(text) => this.setState({mobile: text})}/>

        <Button
          style={{width:100, marginTop:20}}
          title="Ajouter contact"
          backgroundColor="#3498db"
          onPress={this.handleSubmit}
        />

      </View>
    )
  }
}
