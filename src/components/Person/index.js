import React, {useEffect, useState} from 'react';
import {Text, FlatList, View} from 'react-native';
import axios from 'axios';
import {List, Headline, Button, Avatar, FAB} from 'react-native-paper';
import globalStyles from '../../../styles/global';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Person = ({navigation}) => {
  // state de la app
  const [clientes, guardarClientes] = useState([]);
  const [consultarAPI, guardarConsultarAPI] = useState(true);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://192.168.0.2:3000/clientes');
        console.log('resultado', resultado);
        guardarClientes(resultado.data);
        guardarConsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (consultarAPI) {
      obtenerClientesApi();
    }
  }, [consultarAPI]);

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'My List' : 'No Person'}
      </Headline>

      <FlatList
        data={clientes}
        keyExtractor={(cliente) => cliente.id.toString()}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image source={{uri: item.imagen}} />
            <List.Item
              title={item.nombre}
              description={item.empresa}
              style={{width: '100%'}}
              onPress={() =>
                navigation.navigate('DetailPerson', {
                  item,
                  guardarConsultarAPI,
                })
              }
            />
          </View>
        )}
      />

      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NewPerson', {guardarConsultarAPI})}
      />
    </View>
  );
};

export default Person;
