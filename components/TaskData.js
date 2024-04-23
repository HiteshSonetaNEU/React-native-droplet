// TaskData.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('tasks');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error retrieving task data:', error);
    return [];
  }
};

export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem('tasks', jsonValue);
  } catch (error) {
    console.error('Error saving task data:', error);
  }
};

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2024-04-20' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2024-04-22' },
];
saveTasks(initialTasks);

export default initialTasks;
