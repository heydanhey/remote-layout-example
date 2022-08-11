import React, { createContext, useContext } from 'react';

// LayoutOptions

export const LayoutContext = createContext<any>(null);

export const LayoutProvider = ({ value, children }: { value: any, children: React.ReactNode }) => (
  <LayoutContext.Provider value={{ ...value }}>{children}</LayoutContext.Provider>
);


export const useLayoutContext = () => useContext(LayoutContext);
