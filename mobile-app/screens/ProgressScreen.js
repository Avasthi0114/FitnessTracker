import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default function ProgressScreen({ route }) {
  const { token } = route.params;
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('http://10.6.8.123:5000/api/workouts', {
      headers: { Authorization: token }
    }).then(res => setWorkouts(res.data));
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      {workouts.map((workout, i) => (
        <View key={i} style={{ marginBottom: 10 }}>
          <Text>{new Date(workout.date).toDateString()}</Text>
          <Text>Type: {workout.type}</Text>
          <Text>Duration: {workout.duration} mins</Text>
          <Text>Notes: {workout.notes}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
