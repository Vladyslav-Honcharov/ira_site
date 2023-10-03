import React, { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [selectedSession, setSelectedSession] = useState(null);

  const selectSession = (session) => {
    setSelectedSession(session);
  };

  const clearSelectedSession = () => {
    setSelectedSession(null);
  };

  return (
    <AppointmentContext.Provider
      value={{
        selectedSession,
        selectSession,
        clearSelectedSession,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => {
  return useContext(AppointmentContext);
};
