const Multiplication = () => {
  const product = (a, b) => {
    return a * b;
  };

  return (
    <>
      <h2>Multiplication Part</h2>

      <p>The product of 6 and 7 is: {product(6, 7)}</p>
    </>
  );
};

export default Multiplication;
