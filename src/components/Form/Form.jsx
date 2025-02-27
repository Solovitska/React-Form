import css from './Form.module.css'

export default function Form({ onAdd }) {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        onAdd({
            id: Date.now(),
            text: e.target.text.value 
        });
        e.target.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.field} type='text' name='text' /> 
            <button className={css.button} type='submit'>Add task</button>
        </form>
    );
}