import React from 'react';
import GlobalStyle from './globalStyles'
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import Exhibits from './Components/Exhibits';
import Curators from './Components/Curators';
import Registration from './Components/Registration';
import Footer from './Components/Footer';
import Background from './Components/Background';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Showcase />
      {/* <Background /> */}
      {/* <Exhibits /> */}
      {/* <Curators /> */}
      <Registration />
      <Footer />
    </>
  );
}

export default App;
