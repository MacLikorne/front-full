import './App.css';
import { Router } from './components/router/router';
import { Menu } from './components/menu/Menu'
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
