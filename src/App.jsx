import Sellingppoint from "./components/Sellingpoint";
import Signup from "./components/Signup";

function App() {
  return (
    <main>
      <section className="subscribe-container">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <Sellingppoint text="Product discovery and building what matters" />
          <Sellingppoint text="Measuring to ensure updates are a success" />
          <Sellingppoint text="And much more!" />
        </ul>
        <Signup />
      </section>

      <section className="image-container">{/* img */}</section>
    </main>
  );
}

export default App;
