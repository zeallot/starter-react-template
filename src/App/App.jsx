import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';
import Routes from './Routes';
import GlobalStyles from '../shared/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
