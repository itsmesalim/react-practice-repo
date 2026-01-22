const DateTime = () => {
  let myName = "Salim Ullah";
  let myAge = 26;

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <>
      <h1>Task 2</h1>
      <h4>{`my name is ${myName} and i am ${myAge} years old `}</h4>

      <h5>the current Date is {currentDate}</h5>
      <h5>the current Time is {currentTime}</h5>
    </>
  );
};

export default DateTime;
