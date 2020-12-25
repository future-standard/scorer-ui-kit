import React, { useState, HTMLAttributes } from 'react';

export interface ContextProps {
  selected: string,
  setSelected: (value: string) => void
}
export const TabContext = React.createContext<ContextProps>({
  selected: '',
  setSelected: () => { }
});

type Props = HTMLAttributes<HTMLDivElement>

const Tabs: React.FC<Props> = ({ children }) => {
  const [selected, setSelected] = useState('');
  const value = { selected, setSelected };

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  );
};

export { Tabs };