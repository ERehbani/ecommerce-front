import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type User = {
  age: number;
  avatarImg: string;
  documents: [];
  first_name: string;
  last_name: string;
  role: string;
  _v: number;
  _id: string;
} | null;

interface UserState {
  user: User;
  logUser: (userData: User, login: boolean) => void;
  logout: () => void;
  isLogin: boolean;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      isLogin: false,
      user: null,
      logUser: (userData, login) => {
        console.log("logUser called with:", userData, login);
        set({ user: userData, isLogin: login });
        console.log("State after logUser:", get());
      },
      logout: () => {
        console.log("logout called");
        set({ user: null, isLogin: false });
        console.log("State after logout:", get());
      },
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      onRehydrateStorage: (state) => {
        console.log("onRehydrateStorage called");
        return (rehydratedState, error) => {
          if (error) {
            console.error("Error during rehydration:", error);
          } else {
            console.log("Rehydrated state:", rehydratedState);
          }
        };
      },
    }
  )
);

// Add a subscription to log all state changes
useUserStore.subscribe((state) => {
  console.log("Store state changed:", state);
});