import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input id="name" type="text" className="form-control"></input>
        <label htmlFor="name" className="form-label">
          E-mail:
        </label>
        <input id="name" type="text" className="form-control"></input>
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input id="name" type="number" className="form-control"></input>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
