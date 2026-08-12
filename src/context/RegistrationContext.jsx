import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openRegistration = () => setIsOpen(true);
  const closeRegistration = () => setIsOpen(false);

  return (
    <RegistrationContext.Provider value={{ isOpen, openRegistration, closeRegistration }}>
      {children}
    </RegistrationContext.Provider>
  );
};
