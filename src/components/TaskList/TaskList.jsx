// import Task from "../Task/Task";
// import css from './TaskList.module.css';

// export default function TaskList({ tasks }) {
//     return (
//         <ul className={css.list}> 
//             {tasks.map((task) => (
//                 <li className={css.item} key={task.id}>
//                     <Task data={task}/>
//                 </li>
//             ))}
//         </ul>
//     );
// }
import Task from "../Task/Task";
import css from './TaskList.module.css';

export default function TaskList({ tasks }) {
    return (
        <ul className={css.list}> 
            {tasks.map((task) => (
                <li className={css.item} key={task.id}>
                    <Task id={task.id} text={task.text} />
                </li>
            ))}
        </ul>
    );
}
