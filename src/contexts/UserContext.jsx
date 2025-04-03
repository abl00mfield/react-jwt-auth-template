import { createContext, useState } from "react";

const UserContext = createContext(); //this is a constructor

const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null; //user is logged out or they never signed up

  return JSON.parse(atob(token.split(".")[1])).payload;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromToken); // set the user to the one in local storage
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
