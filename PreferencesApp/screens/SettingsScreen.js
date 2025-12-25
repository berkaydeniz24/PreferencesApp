import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const isDark = theme === 'dark';

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        gap: 12,
        backgroundColor: isDark ? '#111' : '#fff',
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: '700', color: isDark ? '#fff' : '#111' }}>
        Settings
      </Text>

      <Text style={{ color: isDark ? '#ddd' : '#333' }}>
        Current theme: {theme}
      </Text>

      <Pressable
        onPress={toggleTheme}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: 'center',
          borderColor: isDark ? '#444' : '#ccc',
        }}
      >
        <Text style={{ fontWeight: '600', color: isDark ? '#fff' : '#111' }}>
          Toggle Theme
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          logout();
          navigation.replace('Login');
        }}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: 'center',
          borderColor: isDark ? '#444' : '#ccc',
        }}
      >
        <Text style={{ fontWeight: '600', color: isDark ? '#fff' : '#111' }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
