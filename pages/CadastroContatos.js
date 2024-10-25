import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@rneui/themed";

export default function CadastroContato({ navigation }) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  const inserirCadastroContato = async () => {
    try {
        const response = await axios.post('http://192.168.37.107:3000/contatos', {
            nome: nome,
            email: email,
            telefone: telefone
        });
        console.log('Usuário cadastrado com sucesso:', response.data);
        setNome('');
        setEmail('');
        setTelefone('');
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
    }
};
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.view2}>
        <Input
          placeholder="Nome"
          inputContainerStyle={styles.inputContainer}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
        <Input
          placeholder="Email"
          inputContainerStyle={styles.inputContainer}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Telefone"
          inputContainerStyle={styles.inputContainer}
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />
      </View>
      <View style={styles.view3}>
        <Button
          color="secondary"
          buttonStyle={styles.buttons}
          onPress={() => inserirCadastroContato()}
        >
          Salvar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  view2: {
    flex: 3,
    justifyContent: "flex-end",
  },
  inputContainer: {
    borderBottomWidth: 0, // Remove a linha inferior padrão do input
    borderRadius: 25, // Define bordas arredondadas
    backgroundColor: "#f1f1f1", // Adiciona uma cor de fundo ao input
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  view3: {
    flex: 3,
  },
  buttons: {
    padding: 10,
    borderRadius: 25,
  },
});
