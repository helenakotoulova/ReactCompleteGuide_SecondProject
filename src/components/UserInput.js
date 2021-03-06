import classes from "./UserInput.module.css";
import { useState } from "react";

function UserInput(props) {
  const [jmeno, setJmeno] = useState("");
  const [age, setAge] = useState("");

  function jmenoHandler(event) {
    setJmeno(event.target.value);
  }

  function ageHandler(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const userData = { jmeno: jmeno, age: age };
    props.onAddNewUser(userData);
    setJmeno("");
    setAge("");
  }

  return (
    <div className={classes.userInputDiv} onSubmit={submitHandler}>
      <form className={classes.form}>
        <div>
          <label htmlFor="jmeno">Username</label>
          <input type="text" id="jmeno" value={jmeno} onChange={jmenoHandler} />
        </div>
        <div>
          <label htmlFor="years">Age (years)</label>
          <input type="text" id="years" value={age} onChange={ageHandler} />
        </div>
        <div className={classes.actions}>
          <button>Add user</button>
        </div>
      </form>
    </div>
  );
}

export default UserInput;
