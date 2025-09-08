import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import HomeScreen from '../features/home/HomeScreen';
import TasksScreen from '../features/tasks/TasksScreen';
import ListScreen from '../features/list/ListScreen';
import { colors } from '../theme/colors';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Tasks" component={TasksScreen} options={{ title: 'Tasks' }} />
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'List' }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
