import React from "react";
import Image from "./Image";
import { useSelector } from "react-redux";

function Images() {
  const images = useSelector((state) => state.images);

  return images.map((image) => <Image key={image.id} image={image} />);
}

export default Images;
