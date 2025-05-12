import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { token } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Workout" onPress={() => navigation.navigate('Add Workout', { token })} />
      <Button title="View Progress" onPress={() => navigation.navigate('Progress', { token })} />
    </View>
  );
}
