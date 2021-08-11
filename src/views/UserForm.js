import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params: {})
    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={name => setUser(...user, name)} // Atualiza todos os atributos de usuario
                placeholder="Informe o nome"
                value={user.name}
            />
            
            <Text>E-mail</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser(...user, email)} // Atualiza todos os atributos de usuario
                placeholder="Informe o e-mail"
                value={user.email}
            />
            
            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                onChangeText={avatarUrl => setUser(...user, avatarUrl)} // Atualiza todos os atributos de usuario
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            
            <Button 
                title="Salvar"
                onPress={()=>{
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})