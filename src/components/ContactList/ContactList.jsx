import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { selectContact } from 'redux/selector';
import { List, ContactItem, Info, BtnInfoDelete } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>
      <List>
        {visibleContacts.map(contact => (
          <ContactItem key={contact.id}>
            <Info>{contact.name}:</Info>
            <Info>{contact.number}</Info>
            <BtnInfoDelete
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </BtnInfoDelete>
          </ContactItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
