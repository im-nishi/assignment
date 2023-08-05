import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AuthScreen } from './app/modules';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"black"}
      />
      <AuthScreen />
    </SafeAreaView>
  );
}

export default App;
