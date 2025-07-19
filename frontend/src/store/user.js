import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { USER_STORE_PERSIST } from '../const';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }), // Optional: to clear user on logout
    }),
    {
      name: USER_STORE_PERSIST,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
