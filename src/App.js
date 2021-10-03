import React from 'react';
import GlobalStyle from './globalStyles'
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import Exhibits from './Components/Exhibits';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Showcase />
      <Exhibits />
      <Footer />
    </>
  );
}

export default App;
