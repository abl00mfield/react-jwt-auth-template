import { useState, useContext } from "react";
import { useNavigate } from "react-router";

//import { signIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setMessage("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //call signedInUser
      //set user to signed in user
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main>
      <h1>Sign In Form</h1>
      <p>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button>Sign In</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignInForm;
