import React, { createContext, useContext, useState, ReactNode } from 'react';

type DisplayStatus = 'empty' | 'restaurants' | 'menu' | 'menu-selection' | 'confirmation' | 'confirmed';

interface DisplayContextType {
  displayStatus: DisplayStatus;
  setDisplayStatus: (status: DisplayStatus) => void;
  hasContent: boolean;
}

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

export function DisplayProvider({ children }: { children: ReactNode }) {
  const [displayStatus, setDisplayStatus] = useState<DisplayStatus>('empty');
  
  const hasContent = displayStatus !== 'empty';

  return (
    <DisplayContext.Provider value={{ displayStatus, setDisplayStatus, hasContent }}>
      {children}
    </DisplayContext.Provider>
  );
}

export function useDisplay() {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error('useDisplay must be used within a DisplayProvider');
  }
  return context;
}
