import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import Shoes from '../src/component';

export default function App() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Image
           source={require('../src/assets/home.png')}
           style={styles.image}
          />
        </View>


       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../src/assets/book.png')} onClick={()=> navigation.navigate('Perguntas') }>
           Teste
          </Shoes>
          <Shoes img={require('../src/assets/book.png')} onClick={()=> navigation.navigate('Perguntas') }>
          Teste
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../src/assets/personalizar.png')} onClick={()=> navigation.navigate('Perguntas') }>
          Teste
          </Shoes>
          <Shoes img={require('../src/assets/sobre.png')} onClick={()=> navigation.navigate('Perguntas') }>
          Teste
          </Shoes>
        </View>

 
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    header:{
      marginBottom: 30
    },
    image:{
      width: '100%'
    },
    textContainer:{
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '5%'
    },
    text:{
     
      fontSize: 26,
      marginHorizontal: '1%'
    },
    line:{
      borderBottomColor: '#D8d8d8',
      borderBottomWidth: 2,
    }
  });

