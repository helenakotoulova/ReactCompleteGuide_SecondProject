import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const DUMMY_DATA = [
    { id: 1, jmeno: "Alan", age: 24 },
    { id: 2, jmeno: "Brix", age: 32 },
  ];
  const [newUserData, setNewUserData] = useState(DUMMY_DATA);

  function addNewDataHandler(info) {
    const userData = {
      ...info,
      id: Math.random().toString(),
    };
    setNewUserData((prevData) => {
      return [userData, ...prevData];
    });
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function validityHandler(invalid) {
    return setModalIsOpen(invalid);
    //console.log(modalIsOpen)
  }

  return (
    <div>
      <div>
        <UserInput
          onAddNewUser={addNewDataHandler}
          onIsValid={validityHandler}
        />
        <UserList data={newUserData} />
      </div>
      <div>
        {modalIsOpen && <Modal />}
      </div>
    </div>
  );
}

export default App;
