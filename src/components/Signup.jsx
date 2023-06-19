const Signup = () => {
  return (
    <form action="">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Signup;
