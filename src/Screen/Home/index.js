import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const image = {
  uri:
    'https://images.unsplash.com/photo-1478301672914-6eba52f60d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerButton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 25,
    borderColor: 'black',
  },
  BackgrondTitle: {
    backgroundColor: '#F6F6F6',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
    paddingTop: 10,
  },
});

const Inicio = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerButton}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => props.navigation.navigate('Person')}>
            <Text style={styles.text}>Iniciar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Inicio;
