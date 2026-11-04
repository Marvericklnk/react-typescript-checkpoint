import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <main>
      <header>MARVIN / REACT + TYPESCRIPT</header>
      <p className="eyebrow">TWO COMPONENTS. CLEAR TYPES.</p>
      <h1>A greeting.<br /><em>A little progress.</em></h1>
      <p className="intro">The same React components, now with typed props and state.</p>
      <section aria-labelledby="greeting-title">
        <span className="number">01</span>
        <h2 id="greeting-title">Greeting</h2>
        <Greeting name="Marvin" />
      </section>
      <section aria-labelledby="counter-title">
        <span className="number">02</span>
        <h2 id="counter-title">Counter</h2>
        <Counter />
      </section>
      <footer>GoMyCode · React TypeScript checkpoint</footer>
    </main>
  );
}
export default App;
