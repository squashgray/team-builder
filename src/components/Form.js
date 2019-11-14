import React, { useState } from "react";

const Form = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(formData);
    setFormData({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name : </label>
      <input
        onChange={onInputChange}
        id="name"
        type="text"
        name="name"
        value={formData.name}
      />
      <label htmlFor="email">Email : </label>
      <input
        onChange={onInputChange}
        id="email"
        type="text"
        name="email"
        value={formData.email}
      />
      <label htmlFor="role">Role : </label>
      <input
        onChange={onInputChange}
        id="role"
        type="text"
        name="role"
        value={formData.role}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
