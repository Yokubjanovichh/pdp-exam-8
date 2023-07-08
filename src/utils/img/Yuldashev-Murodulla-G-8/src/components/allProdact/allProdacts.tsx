import React, { Component } from "react";
import AllProdactsSCSS from "./allProdact.module.scss";
import Categry from "../category";
import Products from "../products";
import axios from "axios";

interface Product {
  products: any;
  place: boolean;
}
export default class AllProdacts extends Component<{}, Product> {
  state: Product = {
    products: [],
    place: true,
  };

  handleRow = () => {
    return this.setState({ place: false });
  };

  handleColumn = () => {
    return this.setState({ place: true });
  };
  componentDidMount() {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      const products = res.data.products;
      this.setState({ products });
      console.log(this.state.products);
    });
  }

  render() {
    const { products, place } = this.state;
    return (
      <>
        <div className={AllProdactsSCSS.container}>
          <input type="text" placeholder="Search..." />
          <button onClick={this.handleRow}>row</button>
          <button onClick={this.handleColumn}>column</button>
          <p>{products.length} Products Found</p>
          <div style={{ borderBottom: "1px" }}></div>
          <p>Sort By</p>
        </div>

        <div className={AllProdactsSCSS.allProdacts}>
          <Categry />
          {place ? (
            <Products />
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="prodact-container">
              {products.map((item: any, idx: any) => (
                <div key={idx} style={{ display: "block" }}>
                  <div className="img">
                    <img style={{ width: "350px", height: "300px" }} src={item.images[0]} alt="" />
                  </div>
                  <div
                    style={{
                      padding: "20px 0px",
                      marginTop: "10px",
                      fontSize: "22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "350px",
                    }}
                  >
                    <p style={{ width: "110px" }}>{item.title}</p>
                    <span style={{ color: "red" }}>${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}
