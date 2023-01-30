import { Form, Label, Input, Button } from './ContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { selectContact } from 'redux/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.warn(`Type field ${name} don't read `);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleClick = e => {
    if (!contacts) {
      return null;
    }
    const newName = name;
    const proofName = Object.values(contacts).map(contact => contact.name);
    if (proofName.includes(newName)) {
      reset();
      return alert(`${newName} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name: name, number: number };
    dispatch(addContact(newContact));

    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" onClick={handleClick}>
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
