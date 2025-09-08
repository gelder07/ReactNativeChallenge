import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { globalStyles } from '../../theme/globalStyles';
import { colors } from '../../theme/colors';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity
        style={[globalStyles.button, styles.buttonContainer]}
        onPress={() => navigation.navigate('Tasks')}
      >
        <Text style={globalStyles.buttonText}>Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[globalStyles.button, styles.buttonContainer]}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={globalStyles.buttonText}>List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 40,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default HomeScreen;
