import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Input, Button, Icon } from "@rneui/themed";

export default function Login({ navigation }) {

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.view1}>
        <Avatar
          size={100}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#f1f1f1" }}
        />
      </View>
      <View style={styles.view2}>
        <Input placeholder="Email" inputContainerStyle={styles.input} />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          inputContainerStyle={styles.input}
        />
      </View>
      <View style={styles.view3}>
        <Button
          buttonStyle={styles.buttons}
          onPress={() => navigation.navigate("ListarContatos")}
        >
          Login
        </Button>
        <Button
          color="secondary"
          buttonStyle={styles.buttons}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Cadastre-se
        </Button>
        <Button
          style={styles.buttons}
          type="clear"
          onPress={() => navigation.navigate("EsqueceuSenha")}
        >
          Esqueceu a senha?
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
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 0,
    borderRadius: 25,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  view3: {
    flex: 1,
  },
  buttons: {
    marginBottom: 20,
    borderRadius: 25,
  },
});
