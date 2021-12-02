import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function UserList(props) {
  /*const [filteredList, setFilteredList]=useState(props.data);
  function deleteHandler(userID) {
    const filter = props.data.filter((element) => {return element.id !== userID});
    setFilteredList(filter);

  }*/
  let newContent = "";
  if (props.data.length === 0) {
    newContent = <p className={classes.alternativeContent}>No users. Start adding?</p>;
  } else {
    newContent = props.data.map((element) => (
      <UserItem
        key={element.id}
        id={element.id}
        jmeno={element.jmeno}
        age={element.age}
        onDelete={props.deleteHandler}
      />
    ));
  }

  return (
    <div className={classes.listDiv}>
      <ul className={classes.ul}>{newContent}</ul>
    </div>
  );
}

export default UserList;
