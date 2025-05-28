import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // Ahora cada categoría es un objeto con nombre y límite
  const [categories, setCategories] = useState([{ name: 'One Punch', limit: 10 }]);

  const onAddCategory = (newCategory, limit) => {
    // Evita duplicados por nombre
    if (categories.some(cat => cat.name === newCategory)) return;

    setCategories([{ name: newCategory, limit }, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map(({ name, limit }) => (
        <GifGrid
          key={name}
          category={name}
          limit={limit} 
        />
      ))}
    </>
  );
};
