import React from "react";
import "./App.css";
import LanguageLink from "./components/languagelink";
import Header from "./components/header";
import Card from "./components/cards";
import Messenger from "./components/messenger";

function App() {
  return (
    <div className="App">
      <LanguageLink />
      <Header />
      <div className="flex-container">
        <Card
          title="Apprendre à apprendre"
          text="Chez Becode on apprend pas un langage en particulier, on apprend à apprendre"
        />
        <Card
          title="Apprendre à apprendre"
          text="Chez Becode on apprend pas un langage en particulier, on apprend à apprendre"
        />
        <Card
          title="Apprendre à apprendre"
          text="Chez Becode on apprend pas un langage en particulier, on apprend à apprendre"
        />
        <Card
          title="Apprendre à apprendre"
          text="Chez Becode on apprend pas un langage en particulier, on apprend à apprendre"
        />
      </div>
      <Messenger />
    </div>
  );
}

export default App;
