import React, { useState } from "react";

function CreateProject() {
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
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
          <label htmlFor="title">Title</label>
          <input
            required
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            type="text"
            id="title"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Content</label>
          <textarea
            className="materialize-textarea"
            required
            onChange={(e) =>
              setInputData({ ...inputData, content: e.target.value })
            }
            type="text"
            id="content"
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
