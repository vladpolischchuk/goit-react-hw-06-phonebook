import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (store, { payload }) => {
                store.push(payload);
            },
            prepare: date => {
                return {
                    payload: {
                        id: nanoid(),
                        ...date,
                    },
                };
            },
        },
        deleteContact: (store, { payload }) => store.filter(({ id }) => id !== payload),
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;