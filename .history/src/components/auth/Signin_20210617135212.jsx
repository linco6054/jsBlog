import React, { useState } from "react";

export default function Signin() {
  const [inputData, setInputData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        div.in
      </form>
    </div>
  );
}
