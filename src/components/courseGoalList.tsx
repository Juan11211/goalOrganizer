import CourseGoal from "./courseGoal";
import { type CourseGoals as CGoals} from "../App";
import InfoBox from './InfoBox';
import { ReactNode } from "react";

//importing CourseGoals from App
type CourseGoalListProps = {
   goals: CGoals[];

   // passing in a function that has a type which is # & returns nothing
   onDeleteGoal: (id: number) => void;
}

//passing goals as props, then creating a type for goals cause goals is prop name, then passing [] because its an array

export default function CourseGoalList({ goals, onDeleteGoal  }: CourseGoalListProps){

  if (goals.length === 0){
    return <InfoBox mode='hint' severity="low">You have no goals yet</InfoBox>
  };

  let warningBox: ReactNode;
 
  if(goals.length >= 4){
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have too many goals
      </InfoBox>
    )
  }

    return(
    <>
      {warningBox}
        <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.desc}</p>
          </CourseGoal>
        </li>
      ))}
       </ul>
    </>
    
    )
}