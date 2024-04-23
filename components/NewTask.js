// NewTask.js

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { getTasks, saveTasks } from './TaskData';

const NewTask = ({ navigation, route }) => { 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');


  const handleCreateTask = async () => {
    const newTask = {
      id: Math.random().toString(),
      title: title,
      description: description,
      dueDate: dueDate,
    };

    try {
      const tasks = await getTasks();
      tasks.push(newTask);
      await saveTasks(tasks);
      Alert.alert('Success', 'New task added successfully');
      
      if (route.params?.onTaskAdded) {
        route.params.onTaskAdded();
      }
    } catch (error) {
      console.error('Error adding new task:', error);
      Alert.alert('Error', 'Failed to add new task');
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        onChangeText={setDueDate}
        value={dueDate}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
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

export default NewTask;
