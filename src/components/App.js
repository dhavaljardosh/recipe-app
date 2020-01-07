import React, { useState } from "react";
import Search from "./Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {searchTerm}
      <Search setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
