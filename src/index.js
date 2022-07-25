import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import UserCard from "./components/userCards";
import Footer from "./components/footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <UserCard />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
