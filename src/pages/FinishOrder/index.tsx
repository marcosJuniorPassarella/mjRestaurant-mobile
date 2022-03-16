import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { api } from '../../services/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes';

type RouteDetailParams = {
    FinishOrder: {
        table: string | number;
        order_id: string;
    }
}

type FinishOrdeRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export function FinishOrder() {
    const route = useRoute<FinishOrdeRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    async function handleFinish() {
        try {
            await api.put('/order/send', {
                order_id: route.params.order_id
            })
            navigation.popToTop()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.alertText}>Você deseja finalizar o pedido?</Text>
            <Text style={styles.tableTitle}>Mesa: {route.params?.table} </Text>
            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.btnText}>Finalizar pedido</Text>
                <Feather name='shopping-cart' size={20} color="#1d1d2e" />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d2e',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alertText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 12,
    },
    tableTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12
    },
    button: {
        backgroundColor: '#3fffa3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    btnText: {
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',
        color: '#1d1d2e'
    }
})