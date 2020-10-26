import './App.css';
import { Router } from './components/router/router';
import { Menu } from './components/menu/Menu'
import { Footer } from './components/footer/Footer';
import { StoreProvider } from './components/flux/Store';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Menu />
      </Router>
      <Footer />
    </StoreProvider>
  );
}

export default App;
