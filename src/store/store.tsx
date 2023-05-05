import { create } from "zustand";

interface ILocation {
  lat: null | number;
  long: null | number;
  setLocation: (lat: number, long: number) => void;
}

export const useLocationStore = create<ILocation>((set) => ({
  lat: null,
  long: null,
  setLocation: (lat: number, long: number) => {
    set({
      lat,
      long,
    });
  },
}));
