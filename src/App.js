import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import { useState } from "react";
import Modal from "./components/Modal";
import Backdrop from './components/Backdrop';

function App() {
  const DUMMY_DATA = [
    { id: 1, jmeno: "Alan", age: 24 },
    { id: 2, jmeno: "Brix", age: 32 },
  ];
  const [newUserData, setNewUserData] = useState(DUMMY_DATA);
  const [content,setContent] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function addNewDataHandler(info) {
    if (info.jmeno.trim().length === 0) {
      setModalIsOpen(true);
      setContent('Invalid Input. Enter a real name and age > 0.');
      return;
    } else if (info.age.length === 0 || parseInt(info.age) <= 0) {
      setModalIsOpen(true);
      setContent('Invalid Age. You must enter age > 0.');
      return;
    }
    const userData = {
      ...info,
      id: Math.random().toString(),
    };
    setNewUserData((prevData) => {
      return [userData, ...prevData];
    });
  }

  //const [filteredList, setFilteredList]=useState(newUserData);
  function deleteHandler(userID) {
    const filteredData = newUserData.filter((element) => {return element.id !== userID});
    setNewUserData(filteredData);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div>
        <UserInput
          onAddNewUser={addNewDataHandler}
        />
        <UserList data={newUserData} deleteHandler={deleteHandler}/>
      </div>
      <div>
        {modalIsOpen && <Backdrop onClickHandler={closeModalHandler}/>}
        {modalIsOpen && <Modal content={content} onClickHandler={closeModalHandler}/>}
      </div>
    </div>
  );
}

export default App;

/*
Dalsi moje chyba:
Chtela jsem vyfiltrovat ty polozky, ale vytvorila jsem novou promennou (v App):
const [filteredList, setFilteredList]=useState(newUserData);
kterou jsem pak passovala do UserListu. Jenze kdyz jsem neco pridala, tak to nefungovalo.
Musim to upravovat primo v newUserData.
*/

/*
Puvodne jsem v userInputu vyhodnocovala validity jmena a veku.
//-----------------------
USERINPUT:
function UserInput(props) {
  const [jmeno, setJmeno] = useState("");
  const [age, setAge] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidAge, setInvalidAge] = useState(false);

  function jmenoHandler(event) {
    setJmeno(event.target.value);
  }

  function ageHandler(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (jmeno.length === 0) {
      setInvalidName(true);
      props.onIsValidName(invalidName);
      return;
    } else if (age.length === 0 || parseInt(age) <= 0) {
      setInvalidAge(true);
      props.onIsValidAge(invalidAge);
      return;
    }
    const userData = { jmeno: jmeno, age: age };
    props.onAddNewUser(userData);

    setJmeno("");
    setAge("");
  }

  //--------------------------
A PAK V APP:
function App() {
  const DUMMY_DATA = [
    { id: 1, jmeno: "Alan", age: 24 },
    { id: 2, jmeno: "Brix", age: 32 },
  ];
  const [newUserData, setNewUserData] = useState(DUMMY_DATA);

  function addNewDataHandler(info) {
    if (info.jmeno.length === 0) {
      setModalIsOpen(true);
      setContent('Invalid Name');
    } else if (info.age.length === 0 || parseInt(age) <= 0) {
      setModalIsOpen(true);
      setContent('Invalid Age');
    }

    const userData = {
      ...info,
      id: Math.random().toString(),
    };
    setNewUserData((prevData) => {
      return [userData, ...prevData];
    });
  }
  
  const [content,setContent] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function validityNameHandler(invalid) {
    setModalIsOpen(invalid);
    setContent('Invalid Name');
  }

  function validityAgeHandler(invalid) {
    setModalIsOpen(invalid);
    setContent('Invalid Age');
  }

  return (
    <div>
      <div>
        <UserInput
          onAddNewUser={addNewDataHandler}
          onIsValidName={validityNameHandler}
          onIsValidAge={validityAgeHandler}
        />
        <UserList data={newUserData} />
      </div>
      <div>
        {modalIsOpen && <Backdrop />}
        {modalIsOpen && <Modal content={content}/>}
      </div>
    </div>
  );
}

//----------------------
A PAK V MODALU:
function Modal(props) {
    
    return(
        <div className={classes.modal}>{props.content}</div>
    )
}

export default Modal;

//------------------
ALE!!!!!! BYL PROBLEM:
kdyz jsem si vyhodnotila to validity uz v user inputu a passla to do App (hodnotu true/false)
a podle toho nastavila ModalIsOpen, tak to reagovalo az pri dalsim renderu!!!!!!!!!
Tzn. pokud chci aby to zareagovalo hned, musim s tim vstupem z userInputu do App udelat neco az v App,
a nepripravovat si to uz v userInputu.
Proto ted do App jen nahraju ty data od uzivatele a tam posoudim jestli je to validni nebo ne.
Vytvorim if podminky v AddNewDataHandler a musim do nich dat i return, aby se mi nevypsalo v 
seznamu uzivatelu: ( year old )

Pokud chci aby mi to vzdycky zareagovalo hned, tak s tema datama musim i neco provest,
tzn napriklad v App obohacuju userInfo o ID a pak ho az passuju do Userlistu.
*/