"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ColorblindContextValue {
  colorblindMode: boolean;
  toggleColorblindMode: () => void;
}

const ColorblindContext = createContext<ColorblindContextValue | null>(null);
const STORAGE_KEY = "semm-colorblind-mode";

export function ColorblindProvider({ children }: { children: React.ReactNode }) {
  const [colorblindMode, setColorblindMode] = useState(false);

  // Lee la preferencia guardada una vez montado (evita mismatches de SSR).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setColorblindMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.colorblind = String(colorblindMode);
    window.localStorage.setItem(STORAGE_KEY, String(colorblindMode));
  }, [colorblindMode]);

  const toggleColorblindMode = useCallback(() => {
    setColorblindMode((current) => !current);
  }, []);

  const value = useMemo<ColorblindContextValue>(
    () => ({ colorblindMode, toggleColorblindMode }),
    [colorblindMode, toggleColorblindMode],
  );

  return (
    <ColorblindContext.Provider value={value}>
      {children}
    </ColorblindContext.Provider>
  );
}

export function useColorblind(): ColorblindContextValue {
  const context = useContext(ColorblindContext);
  if (!context) {
    throw new Error("useColorblind debe usarse dentro de un ColorblindProvider");
  }
  return context;
}
