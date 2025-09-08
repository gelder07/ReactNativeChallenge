import api from './api';
import { ListItem } from '../types/list';

export const getElementsByApi = async (): Promise<ListItem[]> => {
  const response = await api.get<ListItem[]>('/elements');
  return response.data;
};

export const addElementByApi = async (name: string): Promise<ListItem> => {
  const response = await api.post<ListItem>('/elements', {
    name,
    avatar: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
  });
  return response.data;
};
