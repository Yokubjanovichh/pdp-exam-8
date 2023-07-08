import axios from "axios";
import React, { Component } from "react";

interface Products {
  products: any[];
}
export default class Product extends Component<{}, Products> {
  state: Products = {
    products: [],
  };

  componentDidMount() {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      const products = res.data.products;
      this.setState({ products });
      console.log(this.state.products);
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="prodact-container">
        {products.map((item, idx) => (
          <div key={idx} style={{ display: "block" }}>
            <div className="img">
              <img style={{ width: "300px", height: "300px" }} src={item.images[0]} alt="" />
            </div>
            <div style={{ padding: "20px 0px", marginTop: "10px", fontSize: "22px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "300px" }}>
              <p style={{ width: "110px" }}>{item.title}</p>
              <span style={{ color: "red" }}>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
