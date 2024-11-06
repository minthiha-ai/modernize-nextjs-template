import { useEffect, useState } from "react";
import List from '@mui/material/List';
import { useSelector, useDispatch } from "@/store/hooks";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/contacts/ContactSlice";

import Scrollbar from "../../../components/custom-scroll/Scrollbar";
import ContactListItem from "./ContactListItem";
import type { ContactType } from '../../../(DashboardLayout)/types/apps/contact';

type Props = {
  showrightSidebar: () => void;
};

const ContactList = ({ showrightSidebar }: Props) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = (
    contacts: ContactType[],
    filter: string,
    contactSearch: string
  ) => {
    switch (filter) {
      case "show_all":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.firstname.toLocaleLowerCase().includes(contactSearch)
        );

      case "frequent_contact":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.frequentlycontacted &&
            c.firstname.toLocaleLowerCase().includes(contactSearch)
        );

      case "starred_contact":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.starred &&
            c.firstname.toLocaleLowerCase().includes(contactSearch)
        );

      case "engineering_department":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.department === "Engineering" &&
            c.firstname.toLocaleLowerCase().includes(contactSearch)
        );

      case "support_department":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.department === "Support" &&
            c.firstname.toLocaleLowerCase().includes(contactSearch)
        );

      case "sales_department":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.department === "Sales" &&
            c.firstname.toLocaleLowerCase().includes(contactSearch)
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };
  const contacts = useSelector((state) =>
    getVisibleContacts(
      state.contactsReducer.contacts,
      state.contactsReducer.currentFilter,
      state.contactsReducer.contactSearch
    )
  );

  const active = useSelector((state) => state.contactsReducer.contactContent);

  return (
    <Scrollbar
      sx={{
        height: { lg: "calc(100vh - 100px)", md: "100vh" },
        maxHeight: "800px",
      }}
    >
      <List>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            active={contact.id === active}
            {...contact}
            onContactClick={() => {
              dispatch(SelectContact(contact.id));
              showrightSidebar();
            }}
            onDeleteClick={() => dispatch(DeleteContact(contact.id))}
            onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
          />
        ))}
      </List>
    </Scrollbar>
  );
};

export default ContactList;
