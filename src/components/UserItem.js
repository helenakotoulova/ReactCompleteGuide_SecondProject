import classes from './UserItem.module.css';

function UserItem(props) {
    return (
        <li className={classes.li}>{props.jmeno} ({props.age} year old)</li>
    )
}

export default UserItem;