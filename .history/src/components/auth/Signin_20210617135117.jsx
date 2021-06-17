import React, { useState } from "react";

export default function Signin() {
  const [inputData, setInputData] = useState({});
  const handleSubmit = (e) => {e.pre};
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white"></form>
    </div>
  );
}
