const Modulus = () => {
  const mod = (a, b) => {
    return a % b;
  };
  return (
    <>
      <h2>Modulus Part</h2>
      <p>The modulus of 10 and 3 is: {mod(10, 3)}</p>
    </>
  );
};

export default Modulus;
