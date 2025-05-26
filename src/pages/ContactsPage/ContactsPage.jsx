import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";
const ContactList = lazy(() =>
  import("../../components/ContactList/ContactList")
);
const SearchBox = lazy(() => import("../../components/SearchBox/SearchBox"));
const ContactForm = lazy(() =>
  import("../../components/ContactForm/ContactForm")
);

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.section}>
      <Suspense fallback={<p>Loading</p>}>
        <div className={s.container}>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </Suspense>
    </section>
  );
}

export default ContactsPage;
