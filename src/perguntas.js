import React, {useState, useEffect} from 'react';
import {View, Text,Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function App(){

  const [pergunta, setPerguntas] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/api/alternativa',{
      method: 'GET',
      headers:{
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(data =>{
     setPerguntas(data.pergunta)
    })
  }, [])

  return(
      <View style={styles.container}>
        <View style={styles.pergunta}>
          <Text style={styles.textoPergunta} >
          Seu conteúdo é gravado durante a fabricação e trata-se de uma memória apenas de leitura. A qual tipo de memória o enunciado se refere?
          </Text>
       </View>

       <View style={styles.pergunta}>
          <Text style={styles.textoAlternativa}>A- Pen drive, DVD, CD e disco rígido. </Text>
          <Text style={styles.textoAlternativa}>B- Pen drive, RAM e CD-R. </Text>
          <Text style={styles.textoAlternativa}>C- Disco rígido, DVD-RW, EPROM e RAM. </Text>
          <Text style={styles.textoAlternativa}>D- Disc laser, CD-RW, modem e EPROM. </Text>
       </View>

       <View style={styles.containnerResposta} >
         <TouchableOpacity style={styles.botaoResposta} onPress={() => {}} ><Text style={styles.textoPergunta}>A</Text></TouchableOpacity>
         <TouchableOpacity style={styles.botaoResposta} onPress={() => {}}><Text style={styles.textoPergunta}>B</Text></TouchableOpacity>
         <TouchableOpacity style={styles.botaoResposta} onPress={() => {}}><Text style={styles.textoPergunta}>C</Text></TouchableOpacity>
         <TouchableOpacity style={styles.botaoResposta} onPress={() => {}}><Text style={styles.textoPergunta}>D</Text></TouchableOpacity>
       </View>

       <View style={styles.ContainerSubmit}>
       <TouchableOpacity style={styles.submit} onPress={() => {}} ><Text style={styles.textoSubmit}>Responder</Text></TouchableOpacity>
      </View>

      </View>


  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff'
  },
  pergunta:{
     marginTop: 50,
     marginBottom: 1,
     marginLeft: 5,
     marginRight: 10
  },
  textoPergunta:{
    textAlign: "justify",
    fontSize: 18,
    fontWeight: "bold"
  },
  textoAlternativa:{
    textAlign: "justify",
    fontSize: 18,

  },
  containnerResposta:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  botaoResposta:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 25
  },
  ContainerSubmit:{
      alignItems: "flex-end",
      alignContent: "center",
      marginVertical: 40,
      marginHorizontal: 20,
  },
  submit:{
        backgroundColor: "green",
        padding: 10,
  },
  textoSubmit:{
    color: '#ffff',
    fontWeight: "bold"
  }
});