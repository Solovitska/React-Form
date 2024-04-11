import css from './Filter.module.css'
export default function Filter({velue, onFilter}) {
    return(
        <div>
            <p className={css.label}>Search by name</p>
            <input type='text' value={velue} 
            onChange={(e) => onFilter(e.target.value)} />
            </div>
    );
}