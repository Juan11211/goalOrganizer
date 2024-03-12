import CourseGoal from "./courseGoal";
import { type CourseGoals as CGoals} from "../App.tsx";


//importing CourseGoals from App
type CourseGoalListProps = {
   goals: CGoals[];

   // passing in a function that has a type which is # & returns nothing
   onDeleteGoal: (id: number) => void;
}

//passing goals as props, then creating a type for goals cause goals is prop name, then passing [] because its an array

export default function CourseGoalList({ goals, onDeleteGoal  }: CourseGoalListProps){
    return(
        <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <h3>{goal.desc}</h3>
          </CourseGoal>
        </li>
      ))}
      </ul>
    )
}