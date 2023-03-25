import React from "react";
import Banner from "./Banner";
import Produtos from "./Produtos";
import QuemSomos from "./QuemSomos";
import "./style.css";

export default function Conteudo() {
  return (
    <main>
      <Banner />
      <Produtos />
      <QuemSomos />
    </main>
  );
}
