import React from 'react';
import GlobalStyle from './globalStyles'
import Header from './Components/Header';
import Exhibits from './Components/Exhibits';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Exhibits />
      <Exhibits />
      <Exhibits />
      <Footer />
    </>
  );
}

export default App;
