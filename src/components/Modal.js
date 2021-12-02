import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.modal}>
      <h2 className={classes.title}>Invalid Input</h2>
      <div>{props.content}</div>
      <div className={classes.actions}>
          <button type='button' onClick={props.onClickHandler}>Okay</button>
      </div>
    </div>
  );
}

export default Modal;
