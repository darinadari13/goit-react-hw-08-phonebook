import ContactForm from "components/ContactForm/ContactForm";
import Loader from "components/Loader";
import WithAuthRedirect from "HOC/WithAuthRedirect";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactRequest, deleteContactRequest, getContactsRequest } from "redux/contactsSlice/operations";
import { selectContacts, selectLoading, selectError } from "redux/contactsSlice/selectors";
import {selectIsLoggedIn} from "redux/userSlice/selectors";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if(!isLoggedIn) return;

    dispatch(getContactsRequest());
  }, [isLoggedIn, dispatch])

  const handleSubmit = (formData) => {
    dispatch(addContactRequest(formData))
  }

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContactRequest(contactId))
  }

  return (
    <div>
    <ContactForm onSubmit={handleSubmit}/>
    {isLoading && <Loader/>}
    {contacts?.length > 0 && <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Number: {contact.number}</p>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        )
      })}
      </ul>}
    </div>
  )
};

export default WithAuthRedirect(ContactsPage, '/login');