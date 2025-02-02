import { create } from 'zustand';
import { userInterface } from '../models/userInterface';
import { persist } from 'zustand/middleware';

interface currentUser {
  id: number;
  username: string;
  email: string;
  isLoggedIn: boolean;
  assignUser: ({ user }: { user: userInterface }) => void;
  toggleLoggedIn: (status?: boolean) => void;
}

export const userStore = create<currentUser>()(
  persist(
    (set) => ({
      id: 0,
      username: '',
      email: '',
      isLoggedIn: false,

      assignUser: ({ user }: { user: userInterface }) =>
        set(() => ({
          id: user.id,
          username: user.username,
          email: user.email,
          isLoggedIn: true,
        })),

      toggleLoggedIn: (status) =>
        set((state) => ({
          id: 0,
          username: '',
          email: '',
          isLoggedIn: status !== undefined ? status : !state.isLoggedIn,
        })),
    }),
    { name: 'userStorage' },
  ),
);
