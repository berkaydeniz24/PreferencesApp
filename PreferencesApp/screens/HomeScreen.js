import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>
        Welcome, {user?.username ?? 'Guest'}
      </Text>

      <Pressable
        onPress={() => navigation.navigate('Settings')}
        style={{ padding: 12, borderWidth: 1, borderRadius: 10, alignItems: 'center' }}
      >
        <Text style={{ fontWeight: '600' }}>Go to Settings</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          logout();
          navigation.replace('Login');
        }}
        style={{ padding: 12, borderWidth: 1, borderRadius: 10, alignItems: 'center' }}
      >
        <Text style={{ fontWeight: '600' }}>Logout</Text>
      </Pressable>
    </View>
  );
}
