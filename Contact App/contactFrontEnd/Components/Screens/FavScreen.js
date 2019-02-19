import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {
  Avatar,
  Text,
  List,
  ListItem,
  Card,
  Button,
  Divider
} from 'react-native-elements'

import {connect} from 'react-redux';

class FavScreen extends React.Component {

  render() {
    var contactList = this.props.addContact.map((user, i) => {
      var colorNbr = Math.random();
      var color;
      if (colorNbr < 0.25) {
        color = '#e67e22';
      } else if (colorNbr < 0.5) {
        color = '#3498db';
      } else if (colorNbr < 0.75) {
        color = '#16a085';
      } else {
        color = '#e74c3c';
      };

      return (<ListItem key={i} avatar={<Avatar
        small
        rounded
        title = {
          user.firstName[0] + user.name[0]
        }
        overlayContainerStyle = {{backgroundColor: color}}
        />}
        title={user.firstName + ' ' + user.name}
        subtitle={<View style = {
          styles.subtitle
        } >
        <Text style={styles.ratingText}>{user.email}</Text>
        <Text
          style={styles.ratingText}>
          email: {user.email}
        </Text>
      </View>}/>);
    });

    return (<ScrollView style={styles.container}>
      <SafeAreaView>
        <List>
          {
            this.props.addContact.length < 1
              ? <Text>Vous n'avez pas de favoris'.</Text>
              : contactList.reverse()
          }
        </List>
      </SafeAreaView>
      <Divider
        style={{
          height: 20
        }}/>
      <Button
        name="back"
        title="Retour"
        type="outline"
        onPress={() => this.props.navigation.navigate('Contact')}/>

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

function mapStateToProps(state) {
  return {addContact: state.addContact};
}

export default connect(mapStateToProps, null)(FavScreen);
