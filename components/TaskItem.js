import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text>{task.description}</Text>
        <Text>Due Date: {task.dueDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default TaskItem;
