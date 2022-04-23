import styles from './PersonalGoalItem.module.css';

const PersonalGoalItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles.goalItem} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default PersonalGoalItem;
