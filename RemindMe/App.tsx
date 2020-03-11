import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ThemeHolder from './style/ThemeHolder';
import BaseState from './states/BaseState';
import Authenticate from './components/Authenticate/Authenticate';
import Reminder from './components/Reminder/Reminder';
import { Buffer } from 'buffer';

declare var global: {HermesInternal: null | {}, Buffer: any};
global.Buffer = Buffer;

class App extends React.Component<any, BaseState>{

  constructor(props: any){
    super(props);
    this.state = new BaseState(new ThemeHolder());
  }

  render(){
    return(
      <View style={this.state.style.app}>
        <View style={this.state.style.appContent}>
          <Authenticate baseState={this.state} />
        </View>
      </View>
    );
  }
}

export default App;

/**
 * Icons: flaticon.com
 * Credits:
 *    --> https://www.flaticon.com/de/autoren/freepik
 *        - baby.svg
 *        - girl_1.svg
 *        - girl_2.svg
 *        - girl_3.svg
 *        - boy_1.svg
 *        - boy_2.svg
 *        - boy_3.svg
 *        - grandma_1.svg
 *        - grandma_2.svg
 *        - grandpa_1.svg
 * 
 */