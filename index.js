/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
// import App from './src_example/MovingBetweenScreens.js';
// import App from './src_example/PassingParametersToRoutes.js';
// import App from './src_example/CustomHeaderTitleComponent.js';
// import App from './src_example/HeaderButtons.js';
// import App from './src_example/NestingNavigators.js';
// import App from './src_example/NavigationLifecycle.js';
// import App from './src_example/OpeningAFullScreenModal.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
