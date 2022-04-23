import PersonalGoalItem from '../PersonalGoalItem/PersonalGoalItem';
import styles from './PersonalGoalList.module.css'

const PersonalGoalList = props => {
  return (
    <ul className={styles.goalList}>
      {props.items.map(goal => (
        <PersonalGoalItem key={goal.id} id={goal.id} onDelete={props.onDelete}>
          {goal.text}
        </PersonalGoalItem>
      ))}
    </ul>
  );
};

export default PersonalGoalList;
