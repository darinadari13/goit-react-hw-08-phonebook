import { useState } from 'react';
import css from './ContactForm.module.css';


export default function ContactForm({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const {name, value} = e.target;
    
    switch (name) {
      case 'name':
        setName(value);
        break;  
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }


  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name,
      number
    }
    onSubmit(formData);
    setName('');
    setNumber('');
  };
  
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 className={css.title}>Name</h3>
        <input
          className={css.nameInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder={'Enter a name'}
          required
          value={name}
          onChange={handleInputChange}
        />
        <h3 className={css.title}>Number</h3>
        <input
          className={css.numberInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder={'Enter a phone number'}
          required
          value={number}
          onChange={handleInputChange}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }


