import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
export const selectNumberFilter = (state) => state.filters.number;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, name, number) => {
    const nameFiltered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    if (number) {
      return nameFiltered.filter((contact) => contact.number.includes(number));
    }
    return nameFiltered;
  }
);
