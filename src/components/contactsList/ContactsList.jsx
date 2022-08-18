import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/ContactsAction';

import s from './ContactsList.module.css';

function ContactList() {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContact = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={s.container}>
      <ul className={s.contactsList}>
        {filteredContact.map(({ id, name, number }) => (
          <li key={id} className={s.contactsItem}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <button
              className={s.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactList;
