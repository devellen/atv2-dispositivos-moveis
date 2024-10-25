import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Icon, ListItem, Header } from "@rneui/themed";
import { useIsFocused } from '@react-navigation/native';

export default function ListarContatos({ navigation }) {
  const [list, setList] = useState([]);
  const refresh = useIsFocused();

  useEffect(() => {
    function consultarDados() {

      axios.get('http://192.168.37.107:3000/contatos')

        .then(function (response) {
          setList(response.data);
        }).catch(function (error) {
          console.log(error);

        });

    }
    consultarDados();
  }, [refresh])
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <Header

        centerComponent={{ text: 'Lista', style: { color: '#fff' } }}
        rightComponent={
          <Button buttonStyle={{ marginRight: 15 }} title="+"
            onPress={() => navigation.navigate('CadastrarContato')} />}
      />
      {
        list.map((contato) => {
          return (
            <ListItem onPress={() => navigation.navigate('EditarContato', {
              nome: contato.nome,
              email: contato.email,
              telefone: contato.telefone,
              id: contato.id
            })} key={contato.id} bottomDivider>
              <Avatar
                rounded
                icon={{
                  name: "person-outline",
                  type: "material",
                  size: 26,

                }}
                containerStyle={{ backgroundColor: "#c2c2c2" }}
              />
              <ListItem.Content >
                <ListItem.Title>{contato.nome}</ListItem.Title>
                <ListItem.Subtitle>{contato.telefone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
});
