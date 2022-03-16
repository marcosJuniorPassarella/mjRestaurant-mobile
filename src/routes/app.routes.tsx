import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';
import { FinishOrder } from '../pages/FinishOrder';
// TODAS AS ROTAS QUE USUÁRIOS LOGADOS PODEM ACESSAR

export type StackParamsList = {
    Dashboard: undefined;
    Order: {
        table: number | string;
        order_id: string;
    };
    FinishOrder: {
        table: number | string;
        order_id: string;
    }
}

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='Order'
                component={Order}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='FinishOrder'
                component={FinishOrder}
                options={{
                    title: 'Finalizando pedido...',
                    headerStyle: {
                        backgroundColor: '#1d1d2e',
                    },
                    headerTintColor: "#fff"
                }} />
        </Stack.Navigator>
    )
}

export default AppRoutes