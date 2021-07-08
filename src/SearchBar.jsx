import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const searchText = this.props.searchText;
    const onlyInStock = this.props.onlyInStock;
    const onSearchTextChange = this.props.onSearchTextChange;
    const onOnlyInStockChange = this.props.onOnlyInStockChange;
    return (
      <div className="searchBar">
        <input
          type="test"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
        />
        <p>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => onOnlyInStockChange(e.target.checked)}
          />
          Only Show products in stock
        </p>
      </div>
    );
  }
}

export default SearchBar;
