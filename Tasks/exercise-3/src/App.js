import React from "react";
import styles from "./styles.module.css";
import jsonData from "./productData.json";
import SearchResult from "./searchResult";

function SearchView(props) {
  return (
    <div>
      {props.products.map((products) => (
        <SearchResult key={products.id} {...products} />
      ))}
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: jsonData.products,
      SearchString: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ SearchString: event.target.value });
  };

  render() {
    return (
      <div>
        <div className={styles.search}>
          <input
            type="text"
            onChange={this.onSearchChange}
            value={this.state.SearchString}
            placeholder="Search ... "
          />
        </div>

        <div>
          <SearchView
            products={this.state.products.filter((product) =>
              product.productName
                .toLowerCase()
                .includes(this.state.SearchString.toLowerCase())
            )}
          />
        </div>
      </div>
    );
  }
}
export default App;
