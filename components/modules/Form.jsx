import React from "react";
import ItemList from "./ItemList";
import FormInput from "./FormInput";

const Form = ({ form, setForm }) => {
const changeHandler = e => {setForm({...form , [e.target.name] : e.target.value})}
  return (
    <div className="flex flex-col gap-5">
        <FormInput
          name="name"
          label="Name"
          type="text"
          value={form.name}
          onChange={changeHandler}
        />
        <FormInput
          name="lastName"
          label="last Name"
          type="text"
          value={form.lastName}
          onChange={changeHandler}
        />
        <FormInput
          name="email"
          label="email"
          type="text"
          value={form.email}
          onChange={changeHandler}
        />
        <FormInput
          name="phone"
          label="phone"
          type="text"
          value={form.phone}
          onChange={changeHandler}
        />
        <FormInput
          name="address"
          label="address"
          type="text"
          value={form.address}
          onChange={changeHandler}
        />
        <FormInput
          name="postalCode"
          label="postalCode"
          type="text"
          value={form.postalCode}
          onChange={changeHandler}
        />
        <FormInput
          name="date"
          label="date"
          type="date"
          value={form.date}
          onChange={changeHandler}
        />
       
       
     
      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
