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

declare var global: {HermesInternal: null | {}};

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