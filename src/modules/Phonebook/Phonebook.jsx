import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import ContactFilter from "../ContactFilter/ContactFilter";

import { setFilter } from '../../redux/filter/filter-slice';
import { getFilter } from '../../redux/filter/filter-selectors';

import { addContact, deleteContact } from "../../redux/contacts/contacts-slice";
import { getAllContacts, getFilteredContacts } from "../../redux/contacts/contacts-selectors";

const Phonebook = () => {
    const dispatch = useDispatch();

    const allContacts = useSelector(getAllContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = useSelector(getFilteredContacts);

    const isDublicate = (name) => {
        const normalizedName = name.toLowerCase();

        const result = allContacts.find(({ name }) => {
            return (name.toLowerCase() === normalizedName);
        });

        return Boolean(result);
    };

    const handleContact = ({ name, number }) => {
        if (isDublicate(name)) {
            return alert(`${name} is already ixist`);
        };

        dispatch(addContact({ name, number }));
    };

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    const handleFilter = ({ target }) => dispatch(setFilter(target.value));

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={handleContact} />
            <h1>Contacts</h1>
            <ContactFilter value={filter} handleChange={handleFilter} />
            <ContactList removeContact={handleDeleteContact} filteredContacts={filteredContacts} />
        </div>
    );
};

export default Phonebook;