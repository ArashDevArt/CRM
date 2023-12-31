import React from "react";
import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changeHandler = (e , index) => {
    const {name , value} = e.target;
    const newProduct = [...products]
    newProduct[index][name] = value
    setForm({...form , products : newProduct})
  };
  const deleteHandler = (index) => {
    const newProduct = [...products]
    newProduct.splice(index , 1)
    setForm({...form , products : newProduct})
  }

  return (
    <div className="flex flex-col gap-5 p-3 mt-10 border rounded-lg border-slate-500">
      <h2 className="text-lg">Products</h2>
      {products.map((item , index) => (
        <div key={index} className="flex flex-col gap-4 p-3 border rounded-lg border-slate-700">
          <FormInput
            name="name"
            label="product name"
            type="text"
            value={item.name}
            onChange={e => changeHandler(e , index)}
          />
          <div className="flex justify-between gap-10">
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={item.price}
              onChange={e => changeHandler(e , index)}
            />
            <FormInput
              name="qty"
              label="Qty"
              type="text"
              value={item.qty}
              onChange={e => changeHandler(e , index)}
            />
          </div>
          <button className="w-full py-2 text-center text-white duration-150 border-2 border-transparent rounded hover:text-rose-500 bg-rose-500 hover:bg-transparent hover:border-rose-500" onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
      <button
        className="w-full py-2 text-center rounded-lg bg-sky-400"
        onClick={addHandler}
      >
        add item
      </button>
    </div>
  );
};

export default ItemList;
