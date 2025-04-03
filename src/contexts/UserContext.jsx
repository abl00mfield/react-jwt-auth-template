import { createContext, useState } from "react";

const UserContext = createContext(); //this is a constructor

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // set the user to null at first
  //the children prop represents each component we provide context to
  const value = { user, setUser }; //value as an object with the user and the ability to set the user
  return (
    <UserContext.Provider value={value}>
      {/* The data we pass to the value prop above is now available to */}
      {/* all the children of the UserProvider component. */}
      {children}
    </UserContext.Provider>
  );
};

// When components need to use the value of the user context, they will need
// access to the UserContext object to know which context to access.
// Therefore, we export it here.
export { UserProvider, UserContext };
