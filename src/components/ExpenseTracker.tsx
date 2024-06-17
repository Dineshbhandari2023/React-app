import React from "react";
import { z } from "zod";

const ExpenseTracker = () => {
  return (
    <form>
      <label htmlFor="description" className="form-label">
        Description:
      </label>
      <input id="description" type="text" className="form-control"></input>
      <label htmlFor="amount" className="form-label">
        Amount:
      </label>
      <input id="amount" type="text" className="form-control"></input>
      <label htmlFor="category" className="form-label">
        Category:
      </label>
      <input id="category" type="text" className="form-control"></input>
    </form>
  );
};

export default ExpenseTracker;
