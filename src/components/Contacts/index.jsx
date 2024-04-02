import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { full_name: "mehmet", phone_number: "123123" },
    { full_name: "ahmet", phone_number: "456456" },
    { full_name: "mehmet", phone_number: "456456" },
    { full_name: "ahmet", phone_number: "123123" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </>
  );
}

export default Contacts;
