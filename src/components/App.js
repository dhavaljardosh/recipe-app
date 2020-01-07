import React, { useState, useEffect } from "react";
import Search from "./Search";
import Result from "./Result";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState({});
  const [error, setError] = useState("");
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=d76dedb7&app_key=e00eac6daf560cc5d3f33d99c1ef548c&from=${pagination}&to=${pagination +
          10}`
      );
      const data = await response.json();
      console.log(data);
      if (data.count === 0) {
        setResult({});
        setError("No Result Found");
      }
      if (data.count > 0) {
        setResult(data.hits);
        setError("");
      }
    };

    console.log("SEARCH NOW");
    getRecipes();
  }, [searchTerm, setSearchTerm, pagination]);

  return (
    <div>
      {pagination}
      <Search setSearchTerm={setSearchTerm} />
      <Result
        result={result}
        setPagination={setPagination}
        error={error}
        pagination={pagination}
      />
    </div>
  );
}

export default App;
