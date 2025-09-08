import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem as ListItemType } from '../../types/list';
import ListItem from '../molecules/ListItem';

interface RemoteListProps {
  items: ListItemType[];
}

const RemoteList = ({ items }: RemoteListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
});

export default RemoteList;
