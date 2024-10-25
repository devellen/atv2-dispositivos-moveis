import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';

export default function EsqueceuSenha({navigation}) {
    return (
        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={styles.view2}>
                <Input placeholder='Email' inputContainerStyle={styles.input}/>
                <Button color="secondary" buttonStyle={styles.buttons} onPress={() => navigation.navigate('Login')}>Enviar</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#ffffff'
    },
    view2: {
        flex: 1,
        justifyContent: 'center'
    },
    buttons: {
        margin: 8,
        borderRadius: 25
    },
    input: {
        borderBottomWidth: 0,
        borderRadius: 25,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 10,
    }
});