import { createContext } from 'react';

/* How a ChipBar tells its cells they are in the shorter name-bar band.

   Context rather than cloneElement: ChipBar's existing clone guard is `typeof child.type !==
   'string'`, which is true for styled components, so cloning the flag would hand a stray
   attribute to any styled.div cell sitting in the row. Context also reaches a cell wrapped in
   styled(ChipButton) or nested in a fragment, neither of which cloneElement can touch. */
export const ChipCompactContext = createContext(false);
