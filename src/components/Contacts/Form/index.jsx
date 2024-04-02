import { useState } from "react";

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState({ name: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name === "") {
      return false;
    }
    addContacts([...contacts, form]);
    setForm({ name: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="name"
          value={form.full_name}
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
