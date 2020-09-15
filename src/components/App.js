import React, { useEffect } from "react";
import Images from "./Images";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../redux/actions";
import Modal from "./Modal";

function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <div className="alert alert-info text-center">
          Подождите: идёт загрузка...
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <Images />
          </div>
        </div>
      )}
      <Modal />
    </div>
  );
}

export default App;
