// export default function CourseGoal(props: {
//     title: string;
//     desc: string;
// }){ 

import { FC, ReactNode } from "react";

// type and interface, either or is fine. 
type CourseGoalProps = {
    title: string;
   children: ReactNode;
   id: number
   onDelete: (id: number) => void;

}

// interface CourseGoalProps = {
//     title: string;
//     desc: string;
// }

// deconstructing props
// ({title, desc}: {
//     title: string;
//     desc: string;
// })

// export default function CourseGoal ({title, desc}: CourseGoalProps){ 

//     return <article>
//         <div>
//             <h2>{title}</h2>
//             <p>{desc}</p>
//             <button>DELETE</button>
//         </div>
//     </article>
// }

const CourseGoal: FC<CourseGoalProps> = ({title, children, onDelete, id}) => { 

    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
            <button onClick={() => onDelete(id) }>DELETE</button>
        </div>
    </article>
}

export default CourseGoal;