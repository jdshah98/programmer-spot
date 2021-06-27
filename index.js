/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppRoute from './src/routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppRoute);
