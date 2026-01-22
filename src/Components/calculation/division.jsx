const Division = () => {
  const divide = (a, b) => {
    if (b === 0) {
      return "Error: Division by zero is not allowed.";
    }
    return a / b;
  };

  return (
    <>
      <h2>Division Part</h2>

      <p>The quotient of 10 and 2 is: {divide(10, 2)}</p>
    </>
  );
};

export default Division;
