export function loadImages() {
  return (dispatch) => {
    dispatch({ type: "load_images_start" });

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_images_success",
          payload: json,
        });
      });
  };
}

export function modalImage(id) {
  return (dispatch) => {
    dispatch({ type: "modal_image_start", payload: id });

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "modal_image_success",
          payload: json,
        });
      });
  };
}

export function modalExit(id) {
  return (dispatch) => {
    dispatch({ type: "modal_exit_start" });

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "modal_exit_success",
        });
      });
  };
}
