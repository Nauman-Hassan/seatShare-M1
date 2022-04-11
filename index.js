/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import AppNav from './AppNav';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNav);
