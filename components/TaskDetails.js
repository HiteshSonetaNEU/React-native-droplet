import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const TaskDetails = ({ route, navigation }) => {
  const { task } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text>{task.description}</Text>
        <Text>Due Date: {task.dueDate}</Text>
      </View>
      <Button title="Edit" onPress={() => navigation.navigate('EditTask', { task })} />
      <Button title="Delete" onPress={() => console.log('Delete task with ID:', task.id)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  task: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TaskDetails;
