import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebase } from './firebase';

// Screens de l'application
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

// Reducers de l'application
import rootReducer from './reducers';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const store = createStore(rootReducer);

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    if (this.state.user === null) {
      return <LoginScreen />;
    }

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
