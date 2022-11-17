import Li from './ContactList.styled';
import Button from 'components/Button/Button';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visible = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul>
        {visible.map(({ id, name, phone }) => (
          <Li key={id}>
            <p>
              {' '}
              {name}: {phone}{' '}
            </p>
            <Button id={id} />
          </Li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
