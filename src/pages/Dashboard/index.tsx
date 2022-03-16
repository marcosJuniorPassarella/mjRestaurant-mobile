import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes';
import { api } from '../../services/api'

export default function Dashboard() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const [tableNumber, setTableNumber] = useState('');
    const { signOut } = useContext(AuthContext)

    async function openOrder() {
        if (tableNumber === '') {
            return;
        }
        const response = await api.post('/order', {
            table: Number(tableNumber)
        })
        navigation.navigate('Order', { table: tableNumber, order_id: response.data.id })
        setTableNumber('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>
            <TextInput
                placeholder='Número da mesa'
                placeholderTextColor="#f0f0f0"
                style={styles.input}
                keyboardType={'numeric'}
                value={tableNumber}
                onChangeText={setTableNumber}
            />
            <TouchableOpacity style={styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir mesa</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#1d1d2e'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30
    },
    input: {
        width: '80%',
        height: 55,
        backgroundColor: '#101026',
        borderRadius: 10,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    },
    button: {
        width: '75%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold'
    }
})