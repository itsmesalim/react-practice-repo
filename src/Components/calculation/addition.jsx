const Addition = () => {
  const sum = (a, b) => {
    return a + b;
  };

  return (
    <>
      <h2>Addition Part</h2>

      <p>The sum of 5 and 3 is: {sum(5, 3)}</p>
    </>
  );
};

export default Addition;
