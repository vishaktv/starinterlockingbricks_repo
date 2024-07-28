import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type DrawerContextType = {
    open: boolean;
    toggleHandler: () => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext<DrawerContextType>({
    open: false,
    toggleHandler: () => {},
    setOpen: () => {},
});

export const useDrawer = () => useContext(DrawerContext);

const DrawerProvider = ({ children }:{children:React.ReactNode}) => {
    const [open, setOpen] = useState(false);

    const toggleHandler = () => setOpen(!open);

    return (
        <DrawerContext.Provider value={{ open, toggleHandler,setOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};

export default DrawerProvider;
