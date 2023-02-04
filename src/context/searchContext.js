import React from "react";

export const SearchContext = React.createContext();

export const SearchProvider = ({ children, jobs }) => {

  const [searchTerm, setSearch] = React.useState("");
  
  return (
    <SearchContext.Provider value={{ searchTerm, setSearch, jobs}}>
      {children}
    </SearchContext.Provider>
  );
};