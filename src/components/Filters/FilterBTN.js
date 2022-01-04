import React from "react";

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          .is-checked:checked + label {
            background-color: #0b5ed7;
            color: #fff;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check text-center">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input is-checked"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
