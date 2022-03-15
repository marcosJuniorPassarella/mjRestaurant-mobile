import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';

// SOMENTE USUÁRIOS NÃO LOGADOS PODEM ACESSAR

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SigIn' component={SignIn} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;