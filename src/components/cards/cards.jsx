import "./card.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return;
}

export default App;
