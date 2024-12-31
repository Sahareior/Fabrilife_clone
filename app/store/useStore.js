import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      selectedItem: null, // State to store the selected item
      setSelectedItem: (item) => set({ selectedItem: item }),
      clearSelectedItem: () => set({ selectedItem: null }),
    }),
    {
      name: 'app-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
