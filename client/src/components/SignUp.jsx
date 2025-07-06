import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3030/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center bg-gray-400 p-5  justify-center h-screen">
      <form
        action="/signup"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-5 rounded-xl w-[25rem] m-4"
      >
        <h2 className="text-3xl font-semibold mb-2">Register</h2>

        <label htmlFor="username" className="font-semibold my-2">
          Name:
        </label>

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border border-gray-400 rounded-xs px-4 py-2"
        />

        <label htmlFor="email" className="font-semibold my-2">
          Email:
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border border-gray-400 rounded-xs px-4 py-2"
        />

        <label htmlFor="password" className="font-semibold my-2">
          Password:
        </label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border border-gray-400 rounded-xs px-4 py-2"
        />

        <button
          type="submit"
          className="font-semibold my-4 bg-green-800 text-white p-2 rounded-xs"
        >
          Register
        </button>
      </form>

      <p>Already have an account?</p>

      <Link
        to="/login"
        className="font-semibold my-2 border-gray-500 border p-2 rounded-xs text-center"
      >
        Login
      </Link>
    </div>
  );
};
