// TaskList.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Button, Alert } from 'react-native';
import TaskItem from './TaskItem';
import { getTasks } from './TaskData';


const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksFromStorage = await getTasks();
        setTasks(tasksFromStorage);
      } catch (error) {
        console.error('Error fetching task data:', error);
        Alert.alert('Error', 'Failed to fetch task data');
      }
    };

    fetchData();
  }, []);

  const handleTaskAdded = async () => {
    try {
      console.log("here1")
      const tasksFromStorage = await getTasks();
      setTasks(tasksFromStorage);
    } catch (error) {
      console.error('Error fetching task data:', error);
      Alert.alert('Error', 'Failed to fetch task data');
    }
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => navigation.navigate('EditTask', { task: item,onTaskAdded: handleTaskAdded })}
          />
        )}
      />
      {/* Pass onTaskAdded function as a parameter to navigation.navigate */}
      <Button title="New Task" onPress={() => navigation.navigate('NewTask', { onTaskAdded: handleTaskAdded })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default TaskList;
