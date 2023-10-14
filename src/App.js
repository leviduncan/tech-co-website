import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <section className="container app">
      <Header />
      <Hero />
      <Products/>
    </section>
  );
}

export default App;
