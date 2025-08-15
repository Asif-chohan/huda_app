// useToggleSwitches.ts
import { useState } from "react";

type ToggleKeys = "contacts" | "facebook" | "instagram";

export function useToggleSwitches(initialState?: Partial<Record<ToggleKeys, boolean>>) {
  const [toggles, setToggles] = useState<Record<ToggleKeys, boolean>>({
    contacts: false,
    facebook: false,
    instagram: false,
    ...initialState, // allow pre-filled state if needed
  });

  const toggleSwitch = (key: ToggleKeys) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const setSwitch = (key: ToggleKeys, value: boolean) => {
    setToggles((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { toggles, toggleSwitch, setSwitch };
}
