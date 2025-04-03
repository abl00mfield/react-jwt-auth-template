import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar/NavBar.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
