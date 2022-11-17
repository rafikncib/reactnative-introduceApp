/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {

  return (
    <View style={styles.body}>
      <Text style={styles.firstText}>Welcome to my first React Native app</Text>
      <Text style={styles.text}>My Name is Rafik Ncib</Text>
      <Button title='LinkedIn profil' style={styles.button}     color='#8D91C7'
  onPress={()=>{Linking.openURL('https://www.linkedin.com/in/rafik-ncib-b3b666173')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  
  body:{
    flex:1,
    backgroundColor:'#804A4A',
    alignItems:'center',
    justifyContent:'center'
    },
    firstText:{
      fontSize:20,
      fontStyle:'normal',
      fontWeight:'800',
      textAlign:'center',
      color:'#04E762'
    },
  text:{
    fontSize:25,
    fontStyle:'italic',
    color:"#F5B700",
    marginTop:20,
    marginBottom:10,
    textTransform:"capitalize"
  },
});

export default App;
