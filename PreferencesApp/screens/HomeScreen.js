import React from 'react';
import { Text } from 'react-native';

export default function HomeScreen({ route }) {
  const { username } = route.params;
  return <Text style={{ padding: 16, fontSize: 18 }}>Welcome, {username}</Text>;
}
