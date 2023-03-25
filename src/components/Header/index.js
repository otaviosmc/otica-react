import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="box-header container">
        <img src="/assets/logo.png" />
        <nav>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
