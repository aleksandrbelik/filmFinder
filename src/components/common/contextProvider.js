import React from 'react';

const ThemeContext = React.createContext(null);

export const ContextProvider = ({ value, children }) => (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
)

export default ThemeContext;
