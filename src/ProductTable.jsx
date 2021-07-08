import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const products = this.props.products;
    const searchText = this.props.searchText;
    const onlyInStock = this.props.onlyInStock;
    let currentCategory = "",
      row = [];
    products.forEach((product) => {
      console.log(1);
      let category = product.category,
        name = product.name,
        price = product.price,
        stocked = product.stocked;
      if (name.indexOf(searchText) === -1) {
        return;
      }
      if (onlyInStock && !stocked) {
        return;
      }
      if (category !== currentCategory) {
        row.push(<ProductCategoryRow category={category} key={category} />);
        currentCategory = category;
      }
      row.push(
        <ProductRow name={name} price={price} stocked={stocked} key={name} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}

export default ProductTable;
