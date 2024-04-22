import { useState } from "react";
import "./App.css";
import Section from "./components/section";
import Galery from "./components/galeria";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="content">
      <Section
        title={"Evento de Drift SuperMassa"}
        description={"Drifts muito loucos"}
        date={"23/04/2024"}
        hour={"10:99"}
        local={"Logo Ali"}
        image={"./foto1.jpg"}
      />
      <Galery />
      </div>
      <Footer />
    </>
  );
}

export default App;
