import type { User } from '../types/User';
import { useFetch } from '../hooks/useFetch';

export const useUsers = () => {
  return useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
};

export const useUserDetail = (id: string | undefined) => {
  return useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
};