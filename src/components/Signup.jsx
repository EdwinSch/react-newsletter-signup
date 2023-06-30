import { useState } from "react";

const Signup = ({ toggleSubscription }) => {
  const [input, setInput] = useState("");
  const [validate, setValidate] = useState(true);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);

    // Negative validation
    if (!input.includes("@")) {
      setValidate(false);
      return;
    }

    // Positive validation
    setValidate(true);
    // Show feedbackcard
    toggleSubscription(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="labels">
        <label htmlFor="email">Email address</label>
        {validate || <p>Valid email required</p>}
      </div>
      <input
        className={validate ? "valid" : "valid invalid"}
        type="email"
        value={input}
        name="email"
        id="email"
        placeholder="email@company.com"
        onChange={handleChange}
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Signup;
