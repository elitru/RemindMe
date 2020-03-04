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
import Login from './components/Login/Login';

declare var global: {HermesInternal: null | {}};

class App extends React.Component<any, BaseState>{

  constructor(props: any){
    super(props);
    this.state = new BaseState(new ThemeHolder());
  }

  render(){
    return(
      <>
        <View style={ this.state.style.app }>
          <Login baseState={this.state} />
        </View>
      </>
    );
  }
}

export default App;