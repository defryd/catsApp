/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { CatsApp } from './src/CatsApp';

AppRegistry.registerComponent(appName, () => CatsApp);
