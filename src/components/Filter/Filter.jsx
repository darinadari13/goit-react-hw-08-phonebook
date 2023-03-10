import css from './Filter.module.css';
import { setFilter } from '../../redux/contactsSlice/contactsSlice';
import { useSelector,useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contactsSlice/selectors';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  
  return (
    <div className={css.filter}>
      <h4 className={css.title}>Find contacts by name</h4>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
