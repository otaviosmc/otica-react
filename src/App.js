import React from "react";
import "./index.css";
import Header from "./components/Header";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}
