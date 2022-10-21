import create from 'zustand';

interface IGlobalUI {
  menuOpen: boolean;
  toggleMenuOpen: Function;
}

export const useGlobalUI = create<IGlobalUI>((set) => ({
  menuOpen: true,

  toggleMenuOpen: () =>
    set((state) => {
      return {
        menuOpen: !state.menuOpen
      };
    })
}));
