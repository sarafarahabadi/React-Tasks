import React from "react";
import SearchResult from "./searchResult";

export default function SearchView(props) {
    return (
      <div>
        {props.products.map((products) => (
          <SearchResult key={products.id} {...products} />
        ))}
      </div>
    );
  }