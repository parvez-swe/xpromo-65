import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FactoryState {
  isFactoryDirect: boolean;
  activeNav: string;
  activeSecNav: string;
  mounted: boolean;
}

const getLocalStorage = (key: string, defaultValue: any) => {
  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }
  return defaultValue;
};

const initialState: FactoryState = {
  isFactoryDirect: getLocalStorage("isFactoryDirect", false),
  activeNav: "",
  activeSecNav: "",
  mounted: false,
};

const factorySlice = createSlice({
  name: "factory",
  initialState,
  reducers: {
    setFactoryDirect: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isFactoryDirect = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("isFactoryDirect", JSON.stringify(action.payload));
      }
    },
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.activeNav = action.payload;
    },
    setActiveSecNav: (state, action: PayloadAction<string>) => {
      state.activeSecNav = action.payload;
    },
    resetNav: (state) => {
      state.activeNav = "";
      state.activeSecNav = "";
    },
    setMounted: (state) => {
      state.mounted = true;
    },
  },
});

export const {
  setFactoryDirect,
  setActiveNav,
  setActiveSecNav,
  resetNav,
  setMounted,
} = factorySlice.actions;
export default factorySlice.reducer;
