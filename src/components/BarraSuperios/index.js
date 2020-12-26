import React from 'react';
import {Button} from 'react-native-paper';
const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NewPerson');
  };

  return (
    <Button icon="plus-circle" onPress={() => handlePress()} title="Client">
      Client
    </Button>
  );
};

export default BarraSuperior;
