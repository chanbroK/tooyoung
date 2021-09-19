import React, { useState } from "react";

export default function SearchInput() {
  const [SearchField, setSearchField] = useState("");
  return (
    <div>
      <div style={{ marginLeft: "50%", marginTop: "5%" }}>
        <input
          type="search"
          value={SearchField}
          onChange={(e) => setSearchField(e.target.value)}
          style={{ width: "80%" }}
        />
      </div>
    </div>
  );
}
