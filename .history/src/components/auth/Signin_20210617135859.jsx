import React, { useState } from "react";

export default function Signin() {
  const [inputData, setInputData] = useState({
    email: "",
    password:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
      </form>
    </div>
  );
}
