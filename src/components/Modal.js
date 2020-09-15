import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import Comments from "./Comments";
import { modalExit } from "../redux/actions";

function Modal() {
  const opened = useSelector((state) => state.opened);
  const loadingComments = useSelector((state) => state.loadingComments);
  const comments = useSelector((state) => state.comments);
  const fullSizeUrl = useSelector((state) => state.fullSizeUrl);
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleClick = () => {
    dispatch(modalExit());
  };

  if (opened === null) {
    return null;
  }

  return loadingComments ? (
    "Подождите: идёт загрузка данных..."
  ) : (
    <div className="cont">
      <div className="common d-flex">
        <div className="img">
          <img src={fullSizeUrl} alt="" className="image" />
        </div>
        {comments.map((comment) => (
          <Comments comment={comment} />
        ))}
        <div className="exit" onClick={handleClick}>
          х
        </div>
      </div>
      <div>
        <input type="text" placeholder="Ваше Имя" className="inp" ref={input} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Ваш Комментарий"
          className="inp"
          ref={input}
        />
      </div>
      <div className="loading">{loadingComments}</div>
      <div className="button">
        <button className="btn1"> Оставить комментарий</button>
      </div>
    </div>
  );
}

export default Modal;
