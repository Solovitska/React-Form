
import css from './Task.module.css';

export default function Task({ id, text, onDelete }) {
    return(
        <div className={css.container}>
            <p className={css.text}>{text}</p>
            <button className={css.btn} onClick={() => onDelete(id)}>
             Delete
            </button>
        </div>
    );
}