import classes from './UserItem.module.css';

function UserItem(props) {
    function deleteHandler() {
        props.onDelete(props.id);
    }
    return (
        <li className={classes.li} onClick={deleteHandler}>{props.jmeno} ({props.age} year old)</li>
    )
}

export default UserItem;