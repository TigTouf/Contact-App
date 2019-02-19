import React from 'react';
import {View, ScrollView, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {
  Avatar,
  Text,
  List,
  ListItem,
  Badge,
  Icon,
  Divider
} from 'react-native-elements'

import {connect} from 'react-redux';

class ContactScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://api.mlab.com/api/1/databases/contact_app/collections/users?apiKey=I0dNluh7m6O71KlFP5qtgPQYHS6-rCVo').then((response) => {
      return response.json();
    }).then((data) => {
      console.log(this.state.dataSource)
      this.setState({
        isLoading: false,
        dataSource: data});
    }).catch((error) => {
      console.error(error);
    })
  }
  render() {

    if (this.state.isLoading) {

      return (<View style={{
          flex: 1,
          padding: 20
        }}>
        <ActivityIndicator/>
      </View>)
    }

    // var users = [
    //   { firstName: this.state.dataSource.first_name, name: this.state.dataSource.last_name, email: this.state.dataSource.email, mobile: this.state.dataSource.mobile}
    //
    // ]

    var usersList = this.state.dataSource.map((user, i) => {
      console.log(this.state.dataSource)
      return (
        <ListItem
          chevron={true}
          key={i}
        // onPress={() => }
        avatar={<Icon
        raised
        name = 'heart'
        type = 'font-awesome'
        color = '#f30'
        onPress = {() => {
            this.props.handleContact(user.last_name, user.first_name, user.email, user.mobile);
            this.props.navigation.navigate('Fav')
          }
        }
        />}
        title={user.first_name + ' ' + user.last_name}
        subtitle={<View style = {
          styles.subtitle
        } >
        <Text style={styles.ratingText}>{user.mobile}
        </Text>

      </View>}/>)

    })

    return (<ScrollView style={styles.container}>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Divider style={{
            height: 20
          }}/>
        <Text style={{
            fontSize: 25,
            textAlign: 'center'
          }}>
          CONTACT
        </Text>
        {/* <Badge value={users.length} status="primary" /> */}
        <Icon onPress={() => this.props.navigation.navigate('AddContact')}
          
          name='plus'
          type='font-awesome'
          color='#f50'/>
      </View>
      <List>

        {usersList}

      </List>

    </ScrollView>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  subtitle: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 5
  },
  ratingText: {
    color: 'grey'
  }
});

function mapDispatchToProps(dispatch) {
  return {

    handleContact: function(nameContact, firstNameContact, emailContact, mobileContact) {

      dispatch({
        type: 'addcontact',
        name: nameContact,
        firstName: firstNameContact,
        email: emailContact,
        mobile: mobileContact});

    }
  }
};

export default connect(null, mapDispatchToProps)(ContactScreen);
