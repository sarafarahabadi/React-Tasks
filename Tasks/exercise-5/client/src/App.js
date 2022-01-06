import React from "react";
import styles from "./styles.module.css";
import SearchView from "./searchView.js";
import AdminView from "./adminView.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      SearchString: "",
      adminModeActive: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSearchChange = (event) => {
    this.setState({ SearchString: event.target.value });
  };

  addNewProduct = (productName, price) => {
    let newProducts = [...this.state.products];
    newProducts.push({
      id: newProducts.length + 1,
      productName: productName,
      price: price,
    });

    this.setState({
      products: newProducts,
    });
  };

  deleteProduct = (productId) =>
    this.setState({
      products: this.state.products.filter(
        (product) => product.id !== productId
      ),
    });

  render() {
    let output = (
      <>
        <button
          className={styles.adminbutton}
          onClick={() =>
            this.setState({ adminModeActive: !this.state.adminModeActive })
          }
        >
          {" "}
          Admin mode
        </button>
        <div className={styles.search}>
          <input
            type="text"
            onChange={this.onSearchChange}
            value={this.state.SearchString}
            placeholder="Search ... "
          />
        </div>
        <SearchView
          products={this.state.products.filter((product) =>
            product.productName
              ?.toLowerCase()
              .includes(this.state.SearchString.toLowerCase())
          )}
        />
      </>
    );
    if (this.state.adminModeActive) {
      output = (
        <AdminView
          disableAdminMode={() => this.setState({ adminModeActive: false })}
          addNewProduct={this.addNewProduct}
          products={this.state.products}
          deleteProduct={this.deleteProduct}
        />
      );
    }
    return <>{output}</>;
  }
}
export default App;
