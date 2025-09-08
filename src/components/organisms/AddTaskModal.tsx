import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Input from '../atoms/Input';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/globalStyles';

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (description: string) => void;
}

const AddTaskModal = ({ visible, onClose, onAddTask }: AddTaskModalProps) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim()) {
      onAddTask(description);
      setDescription('');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>New Task Name</Text>
          <Input
            placeholder="New Task Name"
            value={description}
            onChangeText={setDescription}
            style={{ marginBottom: 20 }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[globalStyles.button, styles.button, { backgroundColor: colors.secondary }]}
              onPress={onClose}
            >
              <Text style={globalStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[globalStyles.button, styles.button]}
              onPress={handleAddTask}
            >
              <Text style={globalStyles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default AddTaskModal;
