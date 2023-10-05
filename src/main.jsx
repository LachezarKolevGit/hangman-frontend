import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Content from "./Content.jsx";
import RankList from "./RankList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout children={<Content />} />
  </React.StrictMode>
);
