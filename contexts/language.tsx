"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { englishContent, frenchContent } from "@/data";

// Define the structure of the language state
interface LanguageState {
  ISO: "en" | "fr";
  content: typeof englishContent;
}

// Define the context type
interface LanguageContextType {
  language: LanguageState;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageState>>;
  toggleLanguage: () => void;
}

// Initialize the context with `undefined` (so TypeScript doesn't assume a wrong structure)
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<LanguageState>({
    ISO: "en",
    content: englishContent,
  });

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev.ISO === "en"
        ? { ISO: "fr", content: frenchContent }
        : { ISO: "en", content: englishContent }
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to safely access the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
};
