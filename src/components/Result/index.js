import React from "react";

export default ({ result, setPagination, pagination }) => {
  const prevPage = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 10);
  };

  return (
    <div>
      {result.length > 0 && result.map(data => <div>{data.recipe.label}</div>)}
      <div style={{ width: 200, border: "2px solid red", display: "flex" }}>
        <div onClick={prevPage} style={{ flex: 1 }}>
          Prev
        </div>
        <div style={{ flex: 1 }} onClick={() => setPagination(pagination + 10)}>
          Next
        </div>
      </div>
    </div>
  );
};
