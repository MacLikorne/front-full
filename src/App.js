import './App.css';
import { Router } from './components/router/router';
import { Menu } from './components/menu/Menu'
import { Footer } from './components/footer/Footer';
import { StoreProvider } from './components/flux/Store';

function App() {
  return (
    <StoreProvider>
      <div id='app'>
        <Router>
          <Menu />
        </Router>
      </div>
      <Footer />

    </StoreProvider>
  );
}

export default App;
