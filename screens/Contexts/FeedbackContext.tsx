import React, { createContext, useState, ReactNode } from 'react';

type Child = {
  id: number;
  name: string;
  surname: string;
  birthDate?: string;
  gender?: string;
  feedback?: string;
};

type FeedbackContextType = {
  childrenList: Child[];
  setChildrenList: React.Dispatch<React.SetStateAction<Child[]>>;
};

export const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

type FeedbackProviderProps = {
  children: ReactNode;
};

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [childrenList, setChildrenList] = useState<Child[]>([]);

  return (
    <FeedbackContext.Provider value={{ childrenList, setChildrenList }}>
      {children}
    </FeedbackContext.Provider>
  );
};
