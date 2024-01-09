import './App.css';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';
import { Logo } from './Components/Logo';
import { Navigation } from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Logo />
      </header>
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
