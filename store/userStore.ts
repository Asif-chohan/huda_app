import { create } from "zustand";

interface Platform {
  id: number;
  name: string;
  icon: any;
}

interface User {

  email: string;
  password: string;
  photo: string | null;
  username: string;
  pronouns: string;
  dob: Date | null;
  bio: string;
  gender: string;
  platforms: Platform[];
  passions: string[],
}

interface UserState {
  user: User;
  setUser: (updatedFields: Partial<User>) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {

    email: "",
    password: "",
    photo: null,
    username: "",
    pronouns: "",
    dob: null,
    bio: "",
    gender: "",
    platforms: [],
         passions: [],
  },

  // Single setter for partial or composite updates
  setUser: (updatedFields) =>
    set((state) => ({
      user: { ...state.user, ...updatedFields },
    })),

  resetUser: () =>
    set({
      user: {
        email: "",
        password: "",
        photo: null,
        username: "",
        pronouns: "",
        dob: null,
        bio: "",
        gender: "",
        platforms: [],
            passions: [],
      },
    }),
}));
