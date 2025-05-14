import {create} from 'zustand';

export const useStore = create((set) => ({
    sidebar: true,
    setSidebar: (data) => set({sidebar: data})
}))