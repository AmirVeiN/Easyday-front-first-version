import React from 'react';
import Header from './components/header';
import Coin from './components/coin';
import Main from "./components/main";
import Relationship from './components/relationship';
import Appearance from './components/appearance';
import Fitness from './components/fitness';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Coin />
      <Relationship />

      {/* <Appearance />
      <Fitness /> */}
    </>
  );
}

