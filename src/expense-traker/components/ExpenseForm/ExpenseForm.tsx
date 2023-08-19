import React from "react";
import { categories } from "../../../App";

const ExpenseForm = () => {
  return (
    <form className="mb-3">
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" id="Description" />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input type="number" className="form-control" id="Amount" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="category" id="category" className="form-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
