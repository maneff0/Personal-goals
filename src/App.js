import { useState } from 'react';
import PersonalGoalList from './components/PersonalGoals/PersonalGoalList/PersonalGoalList';
import PersonalGoalInput from './components/PersonalGoals/PersonalGoalInput/PersonalGoalInput';
import './App.css';

const App = () => {
  const [personalGoals, setPersonalGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the Personal!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setPersonalGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setPersonalGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (personalGoals.length > 0) {
    content = (
      <PersonalGoalList items={personalGoals} onDelete={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <PersonalGoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
