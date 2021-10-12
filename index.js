/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import Navigation from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store';

const store = configureStore;

const RNRedux = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
