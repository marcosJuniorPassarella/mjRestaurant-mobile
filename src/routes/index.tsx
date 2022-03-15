import React from 'react';
import { View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
    const isAuthentificated = false;
    const loading = false;
    return (
        isAuthentificated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;