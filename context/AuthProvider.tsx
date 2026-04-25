"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ContextTypes {
  theme: Theme;
  toggleDarkMode: () => void;
  handleMenuOpen: () => void;
  openMenu:boolean
}

const AuthContext = createContext<ContextTypes | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isLoading , setLoading] = useState<boolean>(false)
  const [openMenu , setOpenMenu] = useState<boolean>(false)


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
   
  const handleMenuOpen  = () => {
     setOpenMenu(prev => !prev)
  }
    

  const value = {
    theme,
    toggleDarkMode,
    handleMenuOpen,
    openMenu
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export const useProvider = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Somehting went wrong !");
  }

  return context;
};
