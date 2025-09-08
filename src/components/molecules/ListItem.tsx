import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ListItem as ListItemType } from '../../types/list';
import { colors } from '../../theme/colors';

interface ListItemProps {
  item: ListItemType;
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 18,
    color: colors.text,
    marginLeft: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default ListItem;
