import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
function App() {
  const [userInput, setUserinput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid= userInput.duration>=1;
  function handleChange(inputIdentifier, newValue) {
    setUserinput((prevuserInput) => {
      return {
        ...prevuserInput,
        [inputIdentifier]: +newValue, //when we want to set one of inputs
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid&& <p className="center">Please enter a duration great</p> }
     {inputIsValid&& <Results input={userInput} />}
    </>
  );
}

export default App;
