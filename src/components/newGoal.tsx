import { useRef, type FormEvent } from "react";


type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps){

    // useRef default value is null 
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e?.preventDefault();

        new FormData(e?.currentTarget)
   

    // ref will always give us the current value 
        // ! - value will NEVER be null, if null app will crash 
    const enteredGoal = goal.current!.value;

    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary)
 }


    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input type="text" id="goal" name="goal" ref={goal} />
           
        </p>
        <p>
            <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" ref={summary} />
        </p>
        <p>
            <button>Add</button>
        </p>

        
    </form>
}