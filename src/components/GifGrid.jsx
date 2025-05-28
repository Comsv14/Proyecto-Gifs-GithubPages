import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, limit }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category, limit); // Usamos el límite recibido
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, [category, limit]); // También escucha cambios en el límite

  return (
    <>
      <h3>{category} ({limit} gifs)</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
