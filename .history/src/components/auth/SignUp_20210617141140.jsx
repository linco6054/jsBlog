import React, { useState } from "react";

function SignUp() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    FirstName:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            required
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            type="email"
            id="email"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            required
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
            type="password"
            id="password"
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
