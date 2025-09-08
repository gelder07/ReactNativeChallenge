import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchList } from './listSlice';
import RemoteList from '../../components/organisms/RemoteList';
import { globalStyles } from '../../theme/globalStyles';
import { colors } from '../../theme/colors';

const ListScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.list);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={globalStyles.centeredContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.centeredContainer}>
        <Text style={styles.errorText}>Failed to fetch data</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <RemoteList items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.text,
  },
  errorText: {
    fontSize: 16,
    color: colors.danger,
  },
});

export default ListScreen;
