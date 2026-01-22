import Addition from "../../Components/calculation/addition";
import Division from "../../Components/calculation/division";
import Modulus from "../../Components/calculation/modulus";
import Multiplication from "../../Components/calculation/multiplication";
import Subtraction from "../../Components/calculation/subtraction";
// import "./style.css";
import "./calculation-style.css";

const CalculationPage = () => {
  return (
    <>
      <div className="calculation-page">
        <h1>Calculation Page</h1>
        <hr />
        <ul className="list-items">
          <li>
            <Addition />
          </li>
          <li>
            <Subtraction />
          </li>
          <li>
            <Multiplication />
          </li>
          <li>
            <Division />
          </li>
          <li>
            <Modulus />
          </li>
        </ul>
      </div>
    </>
  );
};
export default CalculationPage;
