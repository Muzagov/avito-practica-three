const initialState = {
  loading: true,
  opened: null,
  images: [],
  loadingComments: false,
  comments: [],
  fullSizeUrl: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "load_images_start":
      return {
        ...state,
        loading: true,
      };

    case "load_images_success":
      return {
        ...state,
        loading: false,
        images: action.payload,
      };

    case "modal_image_start":
      return {
        ...state,
        opened: action.payload,
      };

    case "modal_image_success":
      return {
        ...state,
        comments: action.payload.comments,
        fullSizeUrl: action.payload.url,
      };

    case "comments_item_start":
      return {
        ...state,
        loadingComments: false,
      };

    case "modal_exit_start":
      return {
        ...state,
        opened: null,
      };

    default:
      return state;
  }
}
