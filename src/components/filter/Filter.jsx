import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/ContactsAction';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <form className={s.form}>
      <label className={s.lable}>
        <span className={s.findTitle}>Find contect by name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={filter}
          onChange={evt => dispatch(filterContacts(evt.target.value))}
          required
        />
      </label>
    </form>
  );
}

export default Filter;
