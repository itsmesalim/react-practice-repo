const Subtraction = () => {
  const difference = (a, b) => {
    return a - b;
  };

  return (
    <>
      <h2>Subtraction Part</h2>

      <p>The difference of 8 and 4 is: {difference(8, 4)}</p>
    </>
  );
};

export default Subtraction;
