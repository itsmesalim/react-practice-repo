import "./styles.css";

const Greeting = () => {
  let styling = {};
  let containerStyle = {};

  // let currentDate = new Date(2026, 1, 16, 9);
  let currentDate = new Date();
  currentDate = currentDate.getHours();

  let greeting = "";

  if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning";
    styling.color = "#03530d";
    containerStyle.backgroundColor = "#03ce1e";
  } else if (currentDate >= 12 && currentDate < 17) {
    greeting = "Good Afternoon";
    styling.color = "#e69e03";
    containerStyle.backgroundColor = "#f3c562";
  } else {
    greeting = "Good Night";
    styling.color = "#0e0941";
    containerStyle.backgroundColor = "#221780";
  }

  return (
    <>
      <div className="container" style={containerStyle}>
        <h1>
          Hello, <span style={styling}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};

export default Greeting;
