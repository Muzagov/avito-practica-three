import React from "react";
import "./Image.css";
import { useDispatch, useSelector } from "react-redux";
import { modalImage } from "../redux/actions";

function Image(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalImage(props.image.id));
  };

  return (
    <div className="col-4" onClick={handleClick}>
      <img src={props.image.url} className="image" />
    </div>
  );
}

export default Image;
