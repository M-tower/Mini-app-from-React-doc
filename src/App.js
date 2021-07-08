import { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      onlyInStock: false
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleOnlyInStockChange = this.handleOnlyInStockChange.bind(this);
  }
  handleSearchTextChange(searchText) {
    this.setState({ searchText });
  }
  handleOnlyInStockChange(onlyInStock) {
    this.setState({ onlyInStock });
  }
  render() {
    return (
      <div className="App">
        <h1>Voici mon app</h1>
        <SearchBar
          searchText={this.state.searchText}
          onlyInStock={this.state.onlyInStock}
          onSearchTextChange={this.handleSearchTextChange}
          onOnlyInStockChange={this.handleOnlyInStockChange}
        />
        <ProductTable
          products={PRODUCTS}
          searchText={this.state.searchText}
          onlyInStock={this.state.onlyInStock}
        />
      </div>
    );
  }
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
