import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../../types/task';
import { colors } from '../../theme/colors';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    backgroundColor: colors.white,
    width: '100%',
  },
  description: {
    fontSize: 18,
    color: colors.text,
  },
});

export default TaskItem;
