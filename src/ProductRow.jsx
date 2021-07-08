import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.stocked ? (
            this.props.name
          ) : (
            <span className="redText">{this.props.name}</span>
          )}
        </td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
