import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState, AppDispatch } from '../../store';
import { addTask } from './taskSlice';
import TaskList from '../../components/organisms/TaskList';
import AddTaskModal from '../../components/organisms/AddTaskModal';
import { globalStyles } from '../../theme/globalStyles';
import { RootStackParamList } from '../../types/navigation';

type TasksScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tasks'>;

const TasksScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<TasksScreenNavigationProp>();

  const handleAddTask = (description: string) => {
    if (description.trim()) {
      dispatch(addTask(description));
      setModalVisible(false);
      navigation.navigate('List');
    }
  };

  return (
    <View style={globalStyles.container}>
      <TaskList tasks={tasks} />
      <TouchableOpacity
        style={[globalStyles.button, styles.buttonContainer]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={globalStyles.buttonText}>New Task</Text>
      </TouchableOpacity>
      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddTask={handleAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
});

export default TasksScreen;
