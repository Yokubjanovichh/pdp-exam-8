import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import axios from "axios";
// import React, { Component } from "react";

// interface Categoryes {
//   categoryes: any[];
// }

// export default class Category extends Component<{}, Categoryes> {
//   state: Categoryes = {
//     categoryes: [],
//   };

//   componentDidMount() {
//     axios.get(https://dummyjson.com/products/categories).then((res) => {
//       const categoryes = res.data;
//       this.setState({ categoryes });
//       console.log(this.state.categoryes);
//     });
//   }

//   render() {
//     const { categoryes } = this.state;
//     return (
//       <div>
//         <ul className="nav nav-pills">
//         <h1>Categoryes</h1>
//           {categoryes.map((item: any) => (
//             <li style={{listStyle: "none", marginTop: "5px"}} key={item}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
