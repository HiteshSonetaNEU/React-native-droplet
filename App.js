import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Task List' }} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Task Details' }} />
        <Stack.Screen name="NewTask" component={NewTask} options={{ title: 'New Task' }} />
        <Stack.Screen name="EditTask" component={EditTask} options={{ title: 'Edit Task' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
