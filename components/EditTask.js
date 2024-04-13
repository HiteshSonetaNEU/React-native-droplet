// EditTask.js

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { saveTasks } from './TaskData'; // Import saveTasks function from TaskData

import AsyncStorage from '@react-native-async-storage/async-storage';

const EditTask = ({ route, navigation }) => {
  const { task } = route.params;

  // State variables to store edited task details
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
  });

  const handleTaskDelete = async ()=>{
    const tasks = await AsyncStorage.getItem('tasks');
      const parsedTasks = JSON.parse(tasks);
      console.log(parsedTasks,task.id)
      const updatedTasks = parsedTasks.filter(t => t.id !== task.id); 
      await saveTasks(updatedTasks);
      route.params.onTaskAdded();
      console.log('updated delete')
      // Navigate back to the task details screen with the updated task
      navigation.goBack();   
  }
  // Function to handle updating the task
  const handleUpdateTask = async () => {
    // Construct updated task object with edited details
    const updatedTask = {
      ...task, // Retain existing task properties
      title: editedTask.title,
      description: editedTask.description,
      dueDate: editedTask.dueDate,
    };

    // Get the current tasks from AsyncStorage
    try {
      const tasks = await AsyncStorage.getItem('tasks');
      const parsedTasks = JSON.parse(tasks);

      // Find the index of the task to be updated
      const index = parsedTasks.findIndex(t => t.id === task.id);

      // Update the task in the tasks array
      parsedTasks[index] = updatedTask;

      // Save the updated tasks to AsyncStorage
      await saveTasks(parsedTasks);
      route.params.onTaskAdded();
      console.log('updated')
      // Navigate back to the task details screen with the updated task
      navigation.goBack();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
        value={editedTask.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(text) => setEditedTask({ ...editedTask, description: text })}
        value={editedTask.description}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        onChangeText={(text) => setEditedTask({ ...editedTask, dueDate: text })}
        value={editedTask.dueDate}
      />
      <Button title="Update Task" onPress={handleUpdateTask} />
      <Button title="Delete" onPress={handleTaskDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default EditTask;
