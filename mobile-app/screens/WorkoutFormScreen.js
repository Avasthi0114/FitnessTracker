import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function WorkoutFormScreen({ route, navigation }) {
  const { token } = route.params;
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://10.6.8.123:5000/api/workouts',
        { type, duration, notes },
        { headers: { Authorization: token } }
      );
      Alert.alert('Success', 'Workout logged');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', err.response?.data?.error || 'Try again');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Type</Text>
      <TextInput value={type} onChangeText={setType} style={{ borderWidth: 1 }} />
      <Text>Duration (min)</Text>
      <TextInput value={duration} onChangeText={setDuration} keyboardType="numeric" style={{ borderWidth: 1 }} />
      <Text>Notes</Text>
      <TextInput value={notes} onChangeText={setNotes} style={{ borderWidth: 1 }} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}