import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@rneui/themed";

export default function EditarContato({ route }) {
    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { email } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;

            setNome(nome);
            setEmail(email);
            setTelefone(telefone);
            setId(id);
        }
    }, [])

    const editarContato = async () => {
        axios.put('http://192.168.37.107:3000/contatos/' + getId,
            {
                nome: getNome,
                email: getEmail,
                telefone: getTelefone
            }).then(function (response) {
                console.log("funcionou")
            }).catch(function (error) {
                console.log(error);

            });
    };

    function excluirContato() {

        axios.delete('http://192.168.37.107:3000/contatos/' + getId)
            .then(function (response) {
                console.log("excluiu")
                setNome(null);
                setTelefone(null);
                setEmail(null);
                setId(null);
            }).catch(function (error) {
                console.log(error);

            });
    }

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
                    value={getNome}
                />
                <Input
                    placeholder="Email"
                    inputContainerStyle={styles.inputContainer}
                    onChangeText={(text) => setEmail(text)}
                    value={getEmail}
                />
                <Input
                    placeholder="Telefone"
                    inputContainerStyle={styles.inputContainer}
                    onChangeText={(text) => setTelefone(text)}
                    value={getTelefone}
                />
            </View>
            <View style={styles.view3}>
                <Button
                    color="secondary"
                    buttonStyle={styles.buttons}
                    onPress={() => editarContato()}
                >
                    Alterar
                </Button>
                <Button
                    color="secondary"
                    buttonStyle={styles.buttons}
                    onPress={() => excluirContato()}
                >
                    Excluir
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
        borderBottomWidth: 0,
        borderRadius: 25, 
        backgroundColor: "#f1f1f1", 
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    view3: {
        flex: 3,
    },
    buttons: {
        padding: 10,
        borderRadius: 25,
        margin: 10
    },
});
