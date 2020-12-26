import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../Screen/Home';
import Person from '../../Person';
import NewPerson from '../../Person/NewAccount';
import DetailPerson from '../../Person/DetailPerson';
import ButtonSuperior from '../../BarraSuperios';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

const theme = {};

const AppStack = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1774F2',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="Person" component={Person} />

          <Stack.Screen
            name="NewPerson"
            component={NewPerson}
            options={{title: 'New Person'}}
          />

          <Stack.Screen
            name="DetailPerson"
            component={DetailPerson}
            options={{
              title: 'Detalles Cliente',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppStack;
