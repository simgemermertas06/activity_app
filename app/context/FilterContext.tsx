"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  searchQuery: string; //state
  setSearchQuery: (query: string) => void; //state güncelleme fonsksiyonu
  dateRange: { startDate: string; endDate: string }; //state
  setDateRange: (range: { startDate: string; endDate: string }) => void; //state güncelleme fonsksiyonu
  location: string; //state
  setLocation: (loc: string) => void; //state güncelleme fonsksiyonu
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  //props
  const [location, setLocation] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dateRange, setDateRange] = useState<{
    startDate: string;
    endDate: string;
  }>({
    startDate: "",
    endDate: "",
  });

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        dateRange,
        setDateRange,
        location,
        setLocation,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Hook (istenilen componentlerde bu context kullanılacak)
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
