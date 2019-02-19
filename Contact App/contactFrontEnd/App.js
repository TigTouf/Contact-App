import React from 'react';
import {View, Text} from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';

// import de ma navigation qui contient toutes mes Screens
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers -> Redux
import addContact from './Components/Reducers/addcontact.reducer'

// import de mes outils Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Création de mon Store -> Redux
const store = createStore(combineReducers({addContact}));

export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Navigation/>
    </Provider>);
  }
}
