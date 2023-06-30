import Sellingppoint from "./components/Sellingpoint";
import Signup from "./components/Signup";
import successIcon from "./assets/icon-success.svg";

import { useState } from "react";

function App() {
  const [subscription, setSubscription] = useState(false);

  // Toggle feedback
  const toggleSubscription = () => {
    setSubscription(!subscription);
  };

  if (subscription === true) {
    return (
      <div className="feedback-card">
        <img src={successIcon} alt="success icon" />
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to{" "}
          <span>ash@loremcompany.com</span>. Please open it and click the button
          inside to confirm your subscription.
        </p>
        <button type="button" onClick={toggleSubscription}>
          Dismiss message
        </button>
      </div>
    );
  }

  return (
    <main>
      <section className="subscribe-container">
        <h2>Stay updated!</h2>
        <p className="margin-y">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <Sellingppoint text="Product discovery and building what matters" />
          <Sellingppoint text="Measuring to ensure updates are a success" />
          <Sellingppoint text="And much more!" />
        </ul>
        <Signup toggleSubscription={toggleSubscription} />
      </section>

      <section className="image-container">{/* img */}</section>
    </main>
  );
}

export default App;
