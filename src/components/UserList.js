import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function UserList(props) {
  
  return (
    <div className={classes.listDiv}>
      <ul className={classes.ul}>
        {props.data.map((element) => (
          <UserItem
            key={element.id}
            id={element.id}
            jmeno={element.jmeno}
            age={element.age}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
