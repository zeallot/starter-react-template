import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
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
